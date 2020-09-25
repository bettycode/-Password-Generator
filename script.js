//create all the arrays
var receiverArray = [];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "|",
  "[",
  "]",
  ";",
  "'",
  ":",
  "<",
  ">",
  "?",
  "/",
];
//create a function and confirm input
function generatePassword() {
  var passwordText = "";

  var myLowerCase = confirm("Do you want to include lowercase?");
  var myUppercase = confirm("Do you want to include Uppercase?");
  var myNumeric = confirm("Do you want to include numbers?");
  var mySpecial = confirm("Do you want to include special characters?");

  //if all the inputs are false then alert "select atlist one character".

  if (
    myUppercase === false &&
    myLowerCase === false &&
    myNumeric === false &&
    mySpecial === false
  ) {
    alert("Pleas select atlist one character!");
  }
  // if all are true store them in the reciverArray.
  if (myLowerCase === true) {
    receiverArray.push(lowerCase);
  }

  if (myUppercase === true) {
    receiverArray.push(upperCase);
  }

  if (myNumeric === true) {
    receiverArray.push(numeric);
  }

  if (mySpecial === true) {
    receiverArray.push(special);
  }
  //prompt for the length of the password
  var passwordLength = parseInt(
    prompt(
      "How many characters do you want? It  cannot be less than 8 or more than 128 characters."
    )
  );
  // if the lenth of password < 8 alert "pleas select number that is >= 8 characters."
  if (passwordLength < 8) {
    alert("pleas select number that is greater or equal to 8 .");
    passwordLength = parseInt(
      prompt(
        "How many characters do you want? It  cannot be less than 8 or more than 128 characters."
      )
    );
  }
  // if the length of the password is > 128 alert " pleas select a number that is >= than 8 and <= 128"
  if (passwordLength > 128) {
    alert("Pleas select a number the is greater then 8 or less than 128!");
    passwordLength = parseInt(
      prompt(
        "How many characters do you want? It  cannot be less than 8 or more than 128 characters."
      )
    );
    return;
  }

  // creat a loop to generate the randomly from the arrays and store it in an empty array and return.
  for (var i = 0; i < passwordLength; i++) {
    //generate rundom number

    var randomArrayNum = parseInt(
      Math.floor(Math.random() * receiverArray.length)
    );
    console.log("RandomArrayNum", randomArrayNum);
    //generate random number for selected array
    console.log(receiverArray);
    var selectedAarry = receiverArray[randomArrayNum];
    console.log("SeletecdArray", selectedAarry);
    //stores random number based on length of selected array

    var randomNum = Math.floor(Math.random() * selectedAarry.length);
    console.log("randonNum", randomNum);

    var randmCharacter = selectedAarry[randomNum];
    console.log("RandomCHaracter", randmCharacter);

    //combine the string and return passwordText

    passwordText += randmCharacter;

    console.log("==========");
  }

  //generat function to translate the empty array to display on click
  console.log("your password is" + passwordText);
  //alert("your password is" + passwordText);
  return passwordText;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
