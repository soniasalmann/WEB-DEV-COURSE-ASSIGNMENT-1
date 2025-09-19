var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians43 = ["Harry Houdini", "David Blaine", "Penn & Teller"];
function make_great_copy(magicians) {
    var newMagicians = __spreadArray([], magicians, true); // copy
    for (var i = 0; i < newMagicians.length; i++) {
        newMagicians[i] = newMagicians[i] + " the Great";
    }
    return newMagicians;
}
var great_magicians = make_great_copy(magicians43);
console.log("Original Magicians:");
show_magicians(magicians43);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
