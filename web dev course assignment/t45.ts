type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any; // allows extra properties
  };
  
  function make_car(manufacturer: string, model: string, options: {[key: string]: any}): Car {
    return { manufacturer, model, ...options };
  }
  
  let car1 = make_car("Toyota", "Corolla", { color: "blue", year: 2022 });
  let car2 = make_car("Tesla", "Model 3", { autopilot: true, range: "350 miles" });
  
  console.log(car1);
  console.log(car2);
  