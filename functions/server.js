const express = require("express");
const app = express();
const cors = require("cors");
const serverless = require("serverless-http");
const router = express.Router();
require("../model/database");

const userRoutes = require("../routes/userRoutes");
const profileRoutes = require("../routes/profileRoutes");
const contactRoutes = require("../routes/contactRoutes");

app.use(express.json());
app.use(cors({credentials: true, origin: ["http://localhost:3000", "http://localhost:3001", "https://devsinfo.vercel.app"]}));

router.get("/", (req, res) => {
    res.json({status: true})
})

app.use("/api/v1", userRoutes);
app.use("/api/v1", profileRoutes);
app.use("/api/v1", contactRoutes);
app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);
// const PORT = process.env.PORT || 8000
// app.listen(PORT, () => console.log(`server started at ${PORT}`))