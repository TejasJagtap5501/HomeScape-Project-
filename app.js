const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const port=8080;
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));

main()
.then((res)=>
{
    console.log("Database connect Successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Housing');
}


// app.get("/test",(req,res)=>
// {
//     let d1 =new Listing(
//         {
//             title:"King house",
//             description:"Only milliniore live",
//             price:6000,
//             location:"Pune",
//             country:"India"
//         }
//     )
//     d1.save();
//     res.send("Success");
//     console.log("add document");

// });

app.get("/",(req,res)=>
{
    res.send("This is the root ");
})

app.get("/listings",async (req,res)=>
{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
    
}); 

app.get("/listings/new",(req,res)=>
{
    res.render("listings/new.ejs");
})

app.get("/listings/:id/edit",async(req,res)=>
{
    const {id}=req.params;
    let list=await Listing.findById(id);
    res.render("listings/edit.ejs",{list});
});

app.put("/listings/:id",async (req,res)=>
{
    const {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);

})
app.get("/listings/:id",async (req,res)=>
{
    let {id}=req.params;
    let list =await Listing.findById(id);
    res.render("listings/show.ejs",{list});
})



app.post("/listings",(req,res)=>
{
    const newList = new Listing(req.body.listing);
    newList.save();
    res.redirect("/listings");
})

app.delete("/listings/:id",async (req,res)=>
{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})

app.listen(port,()=>
{
    console.log("The port is 8080");
});