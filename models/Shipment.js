const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
    Order_ID: Number,
    Order_Number: String,
    Product_Category: String,
    Origin_City: String,
    Destination_City: String,
    Region: String,
    Shipping_Mode: String,
    Distance_km: Number,
    Shipment_Weight_tons: Number,
    Emission_Factor_kgCO2_per_ton_km: Number,
    Carbon_Emission_kgCO2: Number,
    Delivery_Time_days: Number,
    Late_Delivery_Flag: Number,
    Sales_Amount_INR: Number,
    Profit_INR: Number,
    Sustainability_Score: Number
});

module.exports = mongoose.model("Shipment", shipmentSchema);
