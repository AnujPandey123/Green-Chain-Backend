const mongoose = require("mongoose");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

const Shipment = require("./models/Shipment");

mongoose.connect("mongodb://127.0.0.1:27017/green_supply_chain")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const filePath = path.join(__dirname, "../dataset/Green_Supply_Chain_1000_Rows_Dataset.csv");

const results = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", (data) => {
    // Convert numeric fields automatically
    Object.keys(data).forEach(key => {
      if (!isNaN(data[key]) && data[key] !== "") {
        data[key] = Number(data[key]);
      }
    });

    results.push(data);
  })
  .on("end", async () => {
    try {
      await Shipment.deleteMany({}); // Clear old data
      await Shipment.insertMany(results); // Bulk insert

      const count = await Shipment.countDocuments();
      console.log("Total inserted:", count);

      process.exit();
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });
