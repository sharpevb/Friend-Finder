var friendData = require("../data/friends.js");

module.exports = function(app) {
    // Display json data
    app.get("/api/survey", function(req, res) {
        //friendData.push(req.body);
        return res.json(friendData);
      });

    // Post
    app.post("api/survey", function (req, res) {
        var newFriend = req.body
        console.log(newFriend);
        friendData.push(newFriend);
        res.json(newFriend);
    });
}