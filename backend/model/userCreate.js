const mongoose = require("mongoose");

const shopUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your shop user name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your shop user email!"],
  },
  password: {
    type: String,
    required: [true, "Please enter your shop user password!"],
  },
 
  category: {
    type: String,
    required: [true, "Please enter your product category!"],
  },
 
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
 
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ShopUser", shopUserSchema);
