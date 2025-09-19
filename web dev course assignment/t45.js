var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function make_car(manufacturer, model, options) {
    return __assign({ manufacturer: manufacturer, model: model }, options);
}
var car1 = make_car("Toyota", "Corolla", { color: "blue", year: 2022 });
var car2 = make_car("Tesla", "Model 3", { autopilot: true, range: "350 miles" });
console.log(car1);
console.log(car2);
