import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  },
  state: {
    type: String,
    required: true
  },
  address: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  fone: {
    type: String,
    required: true,
    validate: /^[0-9]*$/
  }
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
