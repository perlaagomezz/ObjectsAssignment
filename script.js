'use strict'

console.log ('hello world');

const chips = {
    brand: "Baked Lay's",
   flavor: "salty",
    where: "7-11",
    purpose: function(){
        return "There is so many chips but my favorite are the " + this. brand + " brand you can get them at  " + this.where + " the flavor of the chips are " + this.flavor + " but they are super good "
    }
}
console.log (chips.purpose());
document.write("<h2>", chips.purpose(), "</h2>")



function IceCream (flavor, topping , cone){
    this.flavor = flavor;
    this.topping = topping;
    this.cone = cone;
}

IceCream.prototype.taste = "sweet"

const Myfavorite = new IceCream ('vanilla', 'sprinkles', 'waffle')

const Myleast = new IceCream ('coffee', 'nuts', 'cake cones')

console.log(Myfavorite)
console.log(Myleast, IceCream.prototype);