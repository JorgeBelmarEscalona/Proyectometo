const  express = require("express");
//const mongoose = require("mongoose");
const  router = express.Router();

router.route("/").get((req, res) => {                                         // 1
    res.send(`<h1>Hello World!  3000</h1>`);
} );

module.exports = router;                                                // 2