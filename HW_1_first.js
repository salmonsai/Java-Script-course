
let item_1 = 5,
    item_2 = 3,
    item_3 = item_1 + item_2,
    item_4 = "yolochka",
    sum = item_3 + item_4,
    mult = item_4.repeat(item_3),
    item_5 = item_3,
    item_6 = 15,
    item_6_type = typeof item_6,
    item_7 = ""+item_6,
    item_7_type = typeof item_7;

let age_1 = 10,
    age_2 = 18,
    age_3 = 60;

console.log(item_3)
console.log(item_4)
console.log(sum)
console.log(mult)
console.log ("item_6 == " + item_6 + ", " + "item_6_type == " + item_6_type)
console.log ("item_7 == " + item_7 + ", " + "item_7_type == " + item_7_type)

if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then");
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!");
} else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
};
    


