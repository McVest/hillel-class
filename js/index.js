const validPhone = (str) => {
    if (/[a-zA-Z]/.test(str))
        return null;
    const cleanLine = str.replace(/\D/g, '');
    const checkingNumbers = /^380|^0/.exec(cleanLine);
    if(!checkingNumbers)
        return null;
    const regExp = new RegExp(`${checkingNumbers[0]}`, "");
    const localizedNumber = checkingNumbers.input.replace(regExp, '0')
    if (localizedNumber.length === 10)
        return localizedNumber;
    return null;
}

console.log(validPhone("+380 44 364 83 65"));
console.log(validPhone("+(380) 11 111 83 65"));
console.log(validPhone("380-44-364-83-65"));
console.log(validPhone("0-68-06-123-87"));
console.log(validPhone("+38 044 364 83 65"));
console.log(validPhone(" 44 364 83 65"));