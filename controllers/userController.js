// Simulated "database"
const usernames = [];

// Log available usernames
exports.logUsernames = (req, res) => {
    console.log("usernames will be logged here - wip");
    res.send("Usernames logged to the terminal (check your console).");
};

// Display the form
exports.displayForm = (req, res) => {
    res.sendFile(__dirname + '/views/newUser.html');
};

// Save the incoming username
exports.saveUsername = (req, res) => {
    const username = req.body.username;
    console.log("username to be saved: ", username);
    usernames.push(username); // Save the username to the "database"
    res.redirect('/'); // Redirect to the homepage
};
