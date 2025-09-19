var current_users = ["John", "Alice", "Bob", "Charlie", "Emma"];
var new_users = ["alex", "BOB", "sophia", "john", "david"];
var _loop_1 = function (newUser) {
    var taken = current_users.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); });
    if (taken) {
        console.log("Sorry, the username '".concat(newUser, "' is taken. Please choose another."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    _loop_1(newUser);
}
