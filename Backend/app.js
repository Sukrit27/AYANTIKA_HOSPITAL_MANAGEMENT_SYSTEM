import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import { fileURLToPath } from "url";  // Added
import path from "path";  // Added

const app = express();
config({ path: "./config/config.env" });

// Get the directory name equivalent to __dirname in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Added

// app.use(
//   cors({
//     origin: true, // or use "*" if you don’t need credentials
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL_ONE,
      process.env.FRONTEND_URL_TWO,
      "http://localhost:5173", // ✅ Add this for local dev if not in .env
      "http://localhost:5174"
    ],
    methods: ["GET", "POST", "DELETE", "PUT"], // ✅ 'methods' not 'method'
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File upload middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"), // Now works with __dirname equivalent
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);
dbConnection();

app.use(errorMiddleware);

export default app;
