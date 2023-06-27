function checkGenerate(password) {
  const MIN_LENGTH = 6;
  const REQUIRED_CHARACTER_TYPES = {
    uppercase: true,
    lowercase: true,
    number: true,
    special: true,
  };

  let missingCharacterTypes = [];
  let recommendStrongPassword;

  if (password.length < MIN_LENGTH) {
    return "Password should be at least " + MIN_LENGTH + " characters long.";
  }

  const symbols = ['$', '@', '!', '#', '%', '&', '*']; 
  const randomIndex = Math.floor(Math.random() * symbols.length);
  const randomNumber = Math.floor(Math.random() * 10); 

  if (REQUIRED_CHARACTER_TYPES.uppercase && !/[A-Z]/.test(password)) {
    missingCharacterTypes.push("uppercase letters"); 
  }

  if (REQUIRED_CHARACTER_TYPES.lowercase && !/[a-z]/.test(password)) {
    missingCharacterTypes.push("lowercase letters");
  }

  if (REQUIRED_CHARACTER_TYPES.number && !/[0-9]/.test(password)) {
    missingCharacterTypes.push("numbers");
  }

  if (REQUIRED_CHARACTER_TYPES.special && !/[^A-Za-z0-9]/.test(password)) {
    missingCharacterTypes.push("special characters");
  }
  
  if (missingCharacterTypes.length > 0) {
    recommendStrongPassword = password.charAt(0).toUpperCase()+ password.slice(1).toLowerCase() + randomNumber + symbols[randomIndex];
    return `Password should include ` + missingCharacterTypes.join(", ") + "." + 
    `Recommended strong password:${recommendStrongPassword}`;
  }

  return "Password is strong.";
}

