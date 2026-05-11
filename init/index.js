// index.js is created for inset the data in the database;
const mongoose = require("mongoose");
const initdata=require("./data.js");
const Listing = require("../models/listing.js");


main()
.then((res)=>
{
    console.log("Database connect Successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Housing');
}

const initDB =async ()=>
{
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);   // data is the key 
    console.log("Data is init");  // data is add to the database
}
initDB();


