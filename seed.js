require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const csv = require("csv-parser");
const Shipment = require("./models/Shipment");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const results = [];

fs.createReadStream("Green_Supply_Chain_1000_Rows_Dataset.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", async () => {
    await Shipment.deleteMany();
    await Shipment.insertMany(results);
    console.log("✅ Data imported successfully");
    mongoose.connection.close();
  });
