const express = require("express");
const router = express.Router();
const Shipment = require("../models/Shipment");


// =============================
// OVERALL STATS
// =============================
router.get("/stats", async (req, res) => {
    try {
        const result = await Shipment.aggregate([
            {
                $group: {
                    _id: null,
                    totalEmissions: { $sum: "$Carbon_Emission_kgCO2" },
                    totalSales: { $sum: "$Sales_Amount_INR" },
                    totalProfit: { $sum: "$Profit_INR" },
                    avgScore: { $avg: "$Sustainability_Score" }
                }
            }
        ]);

        res.json(result[0]);
    } catch (err) {
        res.status(500).json(err);
    }
});


// =============================
// MODE WISE EMISSIONS
// =============================
router.get("/mode-emissions", async (req, res) => {
    try {
        const result = await Shipment.aggregate([
            {
                $group: {
                    _id: "$Shipping_Mode",
                    totalEmission: { $sum: "$Carbon_Emission_kgCO2" }
                }
            }
        ]);
        res.json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});


// =============================
// INSIGHTS API (UPDATED)
// =============================
router.get("/insights", async (req, res) => {
    try {

        const totalShipments = await Shipment.countDocuments();

        const stats = await Shipment.aggregate([
            {
                $group: {
                    _id: null,
                    totalEmissions: { $sum: "$Carbon_Emission_kgCO2" },
                    totalProfit: { $sum: "$Profit_INR" },
                    totalSales: { $sum: "$Sales_Amount_INR" },
                    avgScore: { $avg: "$Sustainability_Score" }
                }
            }
        ]);

        const modeData = await Shipment.aggregate([
            {
                $group: {
                    _id: "$Shipping_Mode",
                    total: { $sum: "$Carbon_Emission_kgCO2" }
                }
            },
            { $sort: { total: -1 } }
        ]);

        const totalEmissions = stats[0].totalEmissions;
        const totalSales = stats[0].totalSales;
        const totalProfit = stats[0].totalProfit;

        // ✅ Carbon Intensity
        const carbonIntensity = totalEmissions / totalSales;

        // ✅ ESG Score Index (based on sustainability score + intensity)
        const esgScore = (
            (stats[0].avgScore * 0.6) +
            ((carbonIntensity < 0.05 ? 90 : 60) * 0.4)
        ).toFixed(2);

        res.json({
            totalShipments,
            totalEmissions,
            totalSales,
            totalProfit,
            worstMode: modeData[0]?._id || "N/A",
            carbonIntensity,
            esgScore
        });
        
        const industryAvgESG = 72;
        const topQuartileESG = 88;

        const esgComparison = {
            company: parseFloat(esgScore),
            industryAverage: industryAvgESG,
            topQuartile: topQuartileESG,
            performanceGap: (parseFloat(esgScore) - industryAvgESG).toFixed(2)
        };
        const industryCarbonIntensity = 0.035; // benchmark value

        const carbonBenchmark = {
            company: carbonIntensity,
            industryAverage: industryCarbonIntensity,
            difference: (carbonIntensity - industryCarbonIntensity).toFixed(4)
        };



    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


// =============================
// SAMPLE TRANSACTIONS
// =============================
router.get("/transactions", async (req, res) => {
    try {
        const data = await Shipment.find().limit(10);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
