import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true, // Only use this in development or for debugging, not production!
    })
    .then(() => {
      console.log("✅ Connected to database successfully!");
    })
    .catch((err) => {
      console.error("❌ Error while connecting to database:", err.message);
    });
};





// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//       console.log("✅ Connected to database successfully!");
//     })
//     .catch((err) => {
//       console.error("❌ Error while connecting to database:", err.message);
//     });
// };
