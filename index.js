const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const PORT = 5000;
const organizationRoutes = require("./routes/organizations")

app.use(cors({origin: 5000}))
app.use(express.static('public'));

app.use('/organization', organizationRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})