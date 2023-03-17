const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const PORT = 9090;
const organizationRoutes = require("./routes/organizations")

app.use(cors({origin: CORS_ORIGIN}))
app.use(express.static('public'));

app.use('/organization', organizationRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})