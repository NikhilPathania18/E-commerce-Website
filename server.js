// import express from "express";
// import colors from "colors";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import cors from "cors";
// import path, { dirname } from 'path';

// //configure env
// dotenv.config();

// //databse config
// connectDB();

// //rest object
// const app = express();


// const __dirname = path.dirname("./client/build/index.html")
// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));
// // app.use(express.static(path.join(__dirname, './client/build')))

// //routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

// //rest api
// app.use('*',function(req,res){
//   // res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   res.sendFile(path.join(__dirname,))
// })

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   console.log(
//     `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
//       .white
//   );
// });


import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

// Get the current directory path using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Serve static files from the React app
app.use(express.static(join(__dirname, 'client', 'build')));

//rest api
app.use('*',function(req,res){
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
