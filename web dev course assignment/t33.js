var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    if (num === 1)
        console.log("".concat(num, "st"));
    else if (num === 2)
        console.log("".concat(num, "nd"));
    else if (num === 3)
        console.log("".concat(num, "rd"));
    else
        console.log("".concat(num, "th"));
}
