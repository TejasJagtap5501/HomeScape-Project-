// const mongoose = require("mongoose");

// const listSchema = new mongoose.Schema(
//     {
//         title:
//         {
//             type:String
//         },
//         description:
//         {
//             type:String
//         },
//         image:
//         {
//             default:"c:\Users\DELL\Pictures\Screenshots\Screenshot 2026-02-26 181544.png",
//             type:String,
//             set:(v)=>v === ""  ?"c:\Users\DELL\Pictures\Screenshots\Screenshot 2026-02-26 181544.png":v // This is ternally if else ( v = person send image ) if( image=empty then give default link or if not then give v )
//         },
//         // image:{
//         // filename:{
//         //     type:String,
//         //     default:"listingimage"
//         // },

//         // url:{
//         //     type:String,
//         //     default:"https://images.unsplash.com/default-image"
//         // }
//         // },
//         price:
//         {
//             type:Number
//         },
//         location:
//         {
//             type:String
//         },
//         country:
//         {
//             type:String
//         }
//     }
// )

// const Listing =mongoose.model("Listing",listSchema);
// module.exports=Listing;


const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({

    title:{
        type:String
    },

    description:{
        type:String
    },

    image:{
        filename:{
            type:String
        },

        url:{
            type:String
        }
    },

    price:{
        type:Number
    },

    location:{
        type:String
    },

    country:{
        type:String
    }

});

const Listing = mongoose.model("Listing", listSchema);

module.exports = Listing;