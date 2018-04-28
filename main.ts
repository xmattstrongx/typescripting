// Class tutorial
class Menu {
    //properties default to public but can be private or protected
    items: Array<string>;
    pages: number;

    // A straightforward constructor
    constructor(item_list: Array<string>, total_pages: number) {
        // keyword "this" is mandatory
        this.items = item_list;
        this.pages = total_pages;
    }

    // Methods
    list(): void {
        console.log("Our meny for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);

sundayMenu.list();

// -----------------------------------

// Abstract class tutorial
class HappyMeal extends Menu {
    // Properties are inherited

    // A new constructor has to be defined.
    constructor(item_list: Array<string>, total_pages: number) {
        // in this case we aant the constructor to be the same as the parent class (Menu)
        // To automatically copy it we can call super()  - a reference to the parent's constructor
        super(item_list, total_pages);
    }

    // Just like the properies, methods are inherited from the parent.
    // However, we want to override the list() function so we can redefine it.
    list(): void {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);

menu_for_children.list();

// -----------------------------------

// Interface tutorial
interface Food {
    name: string,
    calories: number,
}

var ice_cream = {
    name: "ice cream",
    calories: 200
}

function speak(food: Food): void {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}

speak(ice_cream);

// -----------------------------------

// Generics tutorial

// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[]; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument]
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]) // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // Number