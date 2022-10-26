

function chek(str) {
    let result = ""
    if(str == ""){
        result += "Enter string"
    } else {
        if (str.length < 5) {
            result += "Length of string smaller than 5 \n"
        } else if (str.length > 64) {
            result += "Length of string bigger than 64 \n"
        }
        if (!/[0-9]/.test(str)) {
            result += "String shoud include number \n"
        }
        if (!/[a-zа-яё]/.test(str)){
            result += "String shoud include litters \n"
        } else if (!/[A-ZА-ЯЁ]/.test(str)){
            result += "String shoud include uppercase \n"
        }
        if (!/[@]/.test(str)){
            result += "String shoud include @ \n"
        }
    }
   
    if (result == ""){
        return "No mistakes"
    } else {
        return result
    }
   
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter string: ", function (answer) {
    let test = chek(answer)
      console.log(test)
      rl.close();
    });