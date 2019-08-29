var friendData = require("../data/friends.js");

module.exports = function(app) {
    // Display json data
    app.get("/api/survey", function(req, res) {
        //friendData.push(req.body);
        return res.json(friendData);
      });

    // Post
    app.post("api/survey", function (req, res) {
        
        var responses = userData.scores
        
        friendData.send(app);
        res.json(app);

        // Compute match //

        var friendName = ""; 
        var friendImage = ""; 
        var totalDifference = "";
    
        for (var i in friendData) {

            for (var r in responses) {
                (totalDifference += Math.abs(friendData[i].scores[r] - responses[r]));
            }
                friendName = friendData[i].name;
                friendImage = friendData[i].photo;
            }
        },
        // Results not showing up
            
    friendData.push(app));
};