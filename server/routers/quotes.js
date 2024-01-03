import { Router } from "express";
import Quote from "../models/Quote.js";

const router = Router();

// Good stuff goes here
// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newQuote = new Quote(request.body);

    const data = await newQuote.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
// Get all quotes route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Quote.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
// Get a single quote by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Quote.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a quote by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Quote.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
