document.addEventListener("DOMContentLoaded", function () {
  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // Write password to the #password input
  function writePassword() {
    var length = prompt(
      "Enter the desired password length (between 8 and 128 characters):"
    );
    length = validateLength(length);

    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeDigits = confirm("Include numeric characters?");
    var includeSpecialChars = confirm("Include special characters?");

    validateCharacterTypes(
      includeLowercase,
      includeUppercase,
      includeDigits,
      includeSpecialChars
    );

    var password = generatePassword(
      length,
      includeLowercase,
      includeUppercase,
      includeDigits,
      includeSpecialChars
    );

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  function validateLength(input) {
    var length = parseInt(input);

    while (isNaN(length) || length < 8 || length > 128) {
      input = prompt(
        "Invalid input! Please enter a valid password length between 8 and 128 characters:"
      );
      length = parseInt(input);
    }

    return length;
  }

  function validateCharacterTypes(lowercase, uppercase, digits, specialChars) {
    while (!(lowercase || uppercase || digits || specialChars)) {
      alert("At least one character type must be selected!");
      lowercase = confirm("Include lowercase letters?");
      uppercase = confirm("Include uppercase letters?");
      digits = confirm("Include numeric characters?");
      specialChars = confirm("Include special characters?");
    }
  }

  function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeDigits,
    includeSpecialChars
  ) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let allChars = lowercaseChars;

    if (includeUppercase) {
      allChars += uppercaseChars;
    }
    if (includeDigits) {
      allChars += digitChars;
    }
    if (includeSpecialChars) {
      allChars += specialChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }

    return password;
  }
});
