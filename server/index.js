import bodyParser from "body-parser"
import colors from "colors"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import helmet from "helmet"
import mongoose from "mongoose"
import morgan from "morgan"

import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

// //* MOCK DATA MODELS *//
// import OverallStat from "./models/OverallStat.js"
// import Product from "./models/Product.js"
// import ProductStat from "./models/ProductStat.js"
// import Transaction from "./models/Transaction.js"
// import User from "./models/User.js"
// import AffiliateStat from "./models/AffiliateStat.js"

// //* MOCK DATA *//
import {
  dataAffiliateStat,
  dataOverallStat,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataUser,
} from "./data/index.js"

//* CONFIGURATION *//
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//* ROUTES *//
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)

//* MONGOOSE SETUP *//
const PORT = process.env.PORT || 9000
mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_DB_ACCESS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        colors.yellow.bold.italic.underline(
          `MongoDB connected on Port: ${PORT}`
        )
      )
    )
    //* MOCK DATA INJECTION !!ONLY ONE TIME!! *//
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // OverallStat.insertMany(dataOverallStat)
    // AffiliateStat.insertMany(dataAffiliateStat)
  })
  .catch((error) => console.log(`${error} did not connect`))
