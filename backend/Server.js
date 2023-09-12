const express =require ("express");
const dotenv =require( "dotenv");
const morgan =require ("morgan");
const cors  =require ("cors")
const connectDB =require ("./dbconfig/db");
const authRoutes =require ("./routes/authRoute")
// const  categoryRoutes =require ("./routes/categoryRoute")
// const productRoutes  =require ("./routes/productRoute")
// const createProduct =require("./routes/productRoute")




//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/auth", authRoutes);
// app.use("/api/v2/category", categoryRoutes);
// app.use("/api/v2/product", productRoutes);



//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT1
const PORT = process.env.PORT|| 6060;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port http://localhost:${PORT}`
  );
});