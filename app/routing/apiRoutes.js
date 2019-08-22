var friendData = require("../data/friends.js");

module.exports = function(app) {
    // Display json data
    app.get("/api/survey", function(req, res) {
        //friendData.push(req.body);
        return res.json(friendData);
      });

    // Post
    app.post("api/survey", friendData, function (req, res) {
        var newFriend = req.body
        var responses = input.scores
        friendData.push(newFriend);
        res.json(newFriend);

        // Compute match //

        // Variables
        var friendName
        var friendImage
        var totalDifference

        // Need to calculate the differences between each scores

        // Need to loop to go through the friendData and the user's scores

        // Post results
            // return res.json
    });
}