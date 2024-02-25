// Write basic Express boilerplate code.
// With express.json middkeware 

const express = require("express");
const { createTodo } = require("./type");


const app = express();
app.use(express.json());

app.post("/todo",function(req,res){

  const createPayload = req.body;
  const parsePayload =  createTodo.safeParse(createPayload);
  if (!parsePayload.success){
    res.status(411).json({
      msg:"you sent the wrong inputes",
    })
    return;
  }

})

app.get("/todos",function(req,res){
  
})

app.put("/completed",function(req,res){
    const updateTodo = req.body;
    const parsePayload = updateTodo.safeParse(updateTodo);
    if(!parsePayload.success){
      res.status(411).json({
        msg:"you sent wrong inputes"
      })
    }
})

