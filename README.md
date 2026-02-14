# 🌿 GreenChain -- Sustainable Supply Chain Intelligence Platform

## 📌 Project Overview

GreenChain is a full-stack web application that analyzes logistics
operations to measure carbon emissions, profitability, and ESG
performance in real time.\
It enables companies to monitor sustainability metrics, benchmark
against industry standards, and simulate carbon reduction strategies.

The platform integrates shipment-level operational data with carbon
accounting logic inspired by global sustainability frameworks.

------------------------------------------------------------------------

## 🚀 Key Features

-   Real-time shipment analytics
-   Carbon emission calculation engine
-   ESG performance scoring (0--100 index)
-   Carbon intensity tracking (kgCO₂ per revenue)
-   Industry benchmark comparison
-   Carbon reduction simulation tool
-   One-click ESG report export (PDF)
-   Sustainability recommendations engine

------------------------------------------------------------------------

## 🧮 Methodology

### Carbon Emission Formula

Carbon Emissions (kgCO₂) = Distance (km) × Weight (tons) × Emission
Factor

### Profit Margin

Profit Margin (%) = (Total Profit ÷ Total Sales) × 100

### Carbon Intensity

Carbon Intensity = Total Emissions ÷ Total Revenue

### ESG Score Model

Composite score derived from: - Carbon efficiency - Operational
sustainability - Profitability performance

------------------------------------------------------------------------

## 🏗 Tech Stack

Frontend: - HTML5 - CSS3 - Vanilla JavaScript - html2pdf.js

Backend: - Node.js - Express.js

Database: - MongoDB (MongoDB Atlas supported)

Deployment Ready: - Render / Railway / Vercel compatible

------------------------------------------------------------------------

## 🌍 ESG & Benchmark References

The system design is inspired by global sustainability standards:

-   Greenhouse Gas Protocol (GHG Accounting Framework)
-   IPCC Emission Guidelines
-   MSCI ESG Rating methodology (conceptual alignment)
-   Industry logistics benchmarks (transport emission averages)

Note: Benchmark values are configurable constants and can be connected
to live ESG data providers in production deployment.

------------------------------------------------------------------------

## 📂 Project Structure

project/ │ ├── server/ │ ├── config/ │ ├── models/ │ ├── routes/ │ ├──
server.js │ ├── public/ │ ├── index.html │ ├── profitability.html │ ├──
insights.html │ ├── style.css │ └── README.md

------------------------------------------------------------------------

## ⚙️ Installation & Setup

1.  Clone the repository\

2.  Install dependencies

    npm install

3.  Create a .env file inside the server folder

    MONGO_URI=your_mongodb_connection_string\
    PORT=5000

4.  Start the server

    npm start

5.  Open in browser:

    http://localhost:5000

------------------------------------------------------------------------

## ☁️ Deployment

Backend can be deployed on: - Render - Railway

Database: - MongoDB Atlas

Ensure environment variables are configured in the cloud platform
dashboard.

------------------------------------------------------------------------

## 🎯 Business Value

GreenChain enables:

-   ESG transparency for investors
-   Carbon footprint reduction strategy planning
-   Regulatory readiness
-   Sustainable logistics optimization
-   Data-driven environmental decision making

------------------------------------------------------------------------

## 📄 License

This project is developed for academic and demonstration purposes.\
Commercial deployment may require integration with certified ESG data
providers.

------------------------------------------------------------------------

## 👤 Author

Developed as a Sustainable Supply Chain Analytics Platform.
