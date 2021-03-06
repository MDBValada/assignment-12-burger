//3. Inside the `burgers_controller.js` file, import the following:
//* Express

var express = require("express");
var router = express.Router();

//* `burger.js`
var burger = require("../models/burger.js");

//4. Create the `router` for the app, and export the `router` at the end of your file.

//router.get
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
//router.post
router.post("/", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function () {
            res.redirect("/");
        });
});
//router/put
router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
});
//router.delete
router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;