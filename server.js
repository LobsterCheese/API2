const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});


app.use(express.static("./public"));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/src/pages/index.html");
});

app.post("/", function(req,res) {
     console.log("you did a do");
});
