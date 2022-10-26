

function chek_age(age){
    let age_2 = 18, age_3 = 60;
    if(age.match(/[0-9]/)) {
        if (age < age_2) {
            alert("You don’t have access cause your age is " + age + " It’s less then");
        } else if (age < age_3) {
            alert("Welcome!");
        } else if (age > age_3) {
            alert("Keep calm and look Culture channel");
        } else {
            alert("Technical work");
        }
    } else {
        alert("Age shoud be number");
    }
        
}
const age = prompt("Enter your age: ")
chek_age(age)
