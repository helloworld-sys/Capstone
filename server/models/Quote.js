import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phone: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
  // toppings: [String]
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
