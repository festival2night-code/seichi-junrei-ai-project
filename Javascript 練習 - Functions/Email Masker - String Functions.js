function maskEmail(email) {
    let atIndex = email.indexOf("@");
    console.log(atIndex);

    let mask = email.slice(1, atIndex - 1);
    console.log(mask);

    let result = email.replace(mask, "*".repeat(mask.length));
    console.log(result);

    return result;
}

let email = "apple.pie@example.com";
maskEmail(email);

let email2 = "freecodecamp@example.com";
maskEmail(email2);

let email3 = "info@test.dev";
maskEmail(email3);

let email4 = "user@domain.org";
maskEmail(email4);

console.log(maskEmail(email)); // Output: