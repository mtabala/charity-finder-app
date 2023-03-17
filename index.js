const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const organizationRoutes = require("./routes/organization")
const PORT = 9090;

const organizationRoutes = require("./routes/organization.js")

app.use(cors({origin: CORS_ORIGIN}))
app.use(express.static('public'));

app.use('/organization', organizationRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})