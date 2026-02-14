
const mongoose = require("mongoose");
const Shipment = require("./models/Shipment");
const data = require("./dataset.json");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {

      const existing = await Shipment.countDocuments();

      if (existing === 0) {
          await Shipment.insertMany(data);
          console.log("Data Seeded Successfully");
      } else {
          console.log("Data already exists. Skipping seeding.");
      }

      process.exit();
  })
  .catch(err => console.error(err));


