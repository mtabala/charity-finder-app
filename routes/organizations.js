const express = require("express");
const router = express.Router();
const fs = require ("fs");

//function to read organizations

function readOrganizations () {
    const organizationsFile = fs.readFileSync("./data/charity-list.json");
    const organizationsData = JSON.parse(organizationsFile);
    return organizationsData;
}

//get organizations 
router.get("/", (req,res) => {
    const organizations = readOrganizations();
    const organizationsData = organizations.map ((organization) => {
        return {
            id: organization.id, 
            charity: organization.charity,
            description: organization.description,
            field: organization.field,
            image: organization.image,
        }
    })
    console.log (organizations);
    res.status(200).json(organizationsData);
})

//get organization by id
router.get ("/:id", (req,res)=> {
    const organizations = readOrganizations();
    console.log (req.params.id);
    const organization = organizations.find((organization) => organization.id === req.params.id);
    res.status(200).json(organization);
})

module.exports = router ;
