import express from 'express';
import axios from 'axios';

const app = express();
const port =3000;

app.use(express.static("public"));

app.get("/about" ,(req,res)=>{
   res.render("index.ejs", {secret: "Nothing to worry", user:"Noone"});
});

app.get("/",  async (req,res)=>{
    try{
    const result = await axios.get("https://secrets-api.appbrewery.com/random")
   res.render("index.ejs", {secret:result.data.secret, user:result.data.username})
   }catch(error){
    res.status(500);
    console.log(error.response.data)
   }
}
)

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
});
