import { config } from "dotenv";
config({ path: "./config.env" }); // Load environment variables

import { dbConnection } from "./database/dbConnection.js"; // Correct named import
import app from "./app.js";
import cloudinary from "cloudinary";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Corrected this line
});

// Connect to the database and start the server
const startServer = async () => {
  try {
    await dbConnection();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server listening at port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
};

startServer();
