const express = require("express");
const router = express.Router();
const Test = require("../models/Post");


//gets back all the tests 
router.get('/', async(req, res) => {
  try{
    const tests=await Test.find(); 
    res.json(tests); 
  }catch(err){
    res.json({message:err});
  }
});

//submits the tests 
router.post("/", (req, res) => {
  console.log(req.body);
  const test = new Test({
    testName: req.body.testName,
    testContent: req.body.testContent
  });
    test.save()
    .then(data=>{
      res.json(data);
    }) 
    .catch(err=>{
      res.json({message:err})
    }); 


});


//get a specific post 
router.get('/:postId',async(req,res)=>{
  try{//console.log(req.params.postId);
   const test = await Test.findById(req.params.postId);
   res.json(test); 
    
  }catch(err){
    res.json({message:err}); 

  }
 
})

//delete post 
router.delete('/:postId', async(req,res)=>{
  try{
  const removedTest=await Test.remove({_id:req.params.postId}); 
  res.json(removedTest)
  }catch(err){
    res.json({message:err}); 

  }
  
}); 

//update a post 
router.patch('/:postId', async(req, res)=>{
  try{
    const updateTest=await Test.updateOne(
    {_id:req.params.postId},
    {$set:{testName:req.body.testName,
    testContent:req.body.testContent}}
    );
    res.json(updateTest); 
  }catch(err) {
    res.json({message:err}); 
  }
});
module.exports = router;
