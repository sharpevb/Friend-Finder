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
        var totalDifference = 100;
    
        for (var i in friendData) {
            
            var difference = 0

            for (var r in responses) {
                difference += Math.abs(friendData[i].scores[r] - responses[r]);
            }

            if (difference < totalDifference) {
                totalDifference = difference;
                friendName = friendData[i].name;
                friendImage = friendData[i].photo;
            }
        }
        // Need to calculate the differences between each scores

        // Need to loop to go through the friendData and the user's scores

        // Post results
            
    });
    friendData.push(app);
}