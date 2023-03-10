const express = require("express");
const app = express();
const cors = require("cors");
require("./model/database");

const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use(express.json());
app.use(cors({credentials: true, origin: ["http://localhost:3000", "http://localhost:3001", "https://devsinfo.vercel.app"]}));

app.get("/", (req, res) => {
    return res.status(200).json({msg: "harsh"});
})

app.use("/api/v1", userRoutes);
app.use("/api/v1", profileRoutes);
app.use("/api/v1", contactRoutes);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server started at ${PORT}`))