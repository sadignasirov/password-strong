function checkGenerate(password = null) {
  const REQUIRED_CHARACTER_TYPES = {
    uppercase: true,
    lowercase: true,
    number: true,
    character: true,
    length: true,
  };

  const characterTypeRegex = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    character: /[^A-Za-z0-9]/,
    length: /^.{8,}$/,
  };
  if (password) {
    const missingCharacterTypes = Object.keys(REQUIRED_CHARACTER_TYPES)
      .filter(
        (type) =>
          REQUIRED_CHARACTER_TYPES[type] &&
          !characterTypeRegex[type].test(password)
      )
      .map((type) => type);

    if (missingCharacterTypes.length > 0) {
      const randomCode = Math.floor(Math.random() * (47 - 33 + 1)) + 33;
      const specialChar = String.fromCharCode(randomCode);
      const randomSymbol = specialChar;
      const randomDigit = Math.floor(Math.random() * 10);

      let recommendStrongPassword = `${password
        .charAt(0)
        .toUpperCase()}${password
        .slice(1)
        .toLowerCase()}${randomDigit}${randomSymbol}`;

      const randomString = (Math.random() + 1)
        .toString(36)
        .substring(2, 8 - recommendStrongPassword.length)
        .padEnd(8 - recommendStrongPassword.length, "0");

      recommendStrongPassword =
        recommendStrongPassword.length < 8
          ? recommendStrongPassword + randomString
          : recommendStrongPassword;

      return {
        error: true,
        message: `It did not pass validations: ${missingCharacterTypes.join(
          ", "
        )}.`,
        recommendedPassword: recommendStrongPassword,
      };
    }

    return {
      error: false,
      message: "The password is strong.",
    };
  } else {
    let length = 12;
    const characterSets = [
      Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
      Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)), 
      Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i)), 
      Array.from({ length: 23 }, (_, i) => String.fromCharCode(33 + i)), 
    ];
  
    const allCharacters = characterSets.flat().join('');
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomSetIndex = Math.floor(Math.random() * characterSets.length);
      const randomCharacterSet = characterSets[randomSetIndex];
      const randomIndex = Math.floor(Math.random() * randomCharacterSet.length);
      password += randomCharacterSet[randomIndex];
    }
  
    return {
      generatedPassword: password
    };
  }
}

module.exports = checkGenerate;
