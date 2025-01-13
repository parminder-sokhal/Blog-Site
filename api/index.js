import express from "express";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://parmindersokhal22:BlogSite22@blog-site.zhnju.mongodb.net/blog-site?retryWrites=true&w=majority&appName=blog-site"
).then(()=>{
    console.log('mongodb is connected')
}).catch(err=>{
    console.log(err);
});

const app = express();

app.listen(3000, () => {
  console.log("server is running on 3000");
});
