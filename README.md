# Password Strength Check And Strong Password Generation

- Checking the entered password and recommending a strong password.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

- According to what features the password is weak, a strong password is generated according to the user's input.

## Features

- Checking the strength of the password.
- Generating a strong password.

## Installation

Clone the repository:
- git clone https://github.com/sadignasirov/password-strong

Install dependencies:
- cd password-strong
- npm install

## Usage

```shell

const password = "hello";
const checkGeneratePassword = checkGenerate(password);
console.log(checkGeneratePassword)

{
  error: true,
  message: 'It did not pass validations: uppercase, number, character, length.',
  recommendedPassword: 'Hello4*.'
}

const password = "Hello4*.";
const checkGeneratePassword = checkGenerate(password);
console.log(checkGeneratePassword)

{ 
    error: false, 
    message: 'Password is strong.' 
}

```

## Contributing

- If you would like to contribute code, please fork this repository, make your changes, and then submit a pull-request.

## License

- This project is licensed under the MIT License. See the license file for more information.



