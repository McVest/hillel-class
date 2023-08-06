validPhone = (str) => {
    const regularPhone = /^(?:\+?380)(( \d{2} \d{3} \d{2} \d{2})|(-\d{2}-\d{3}-\d{2}-\d{2}))$/;
    if (!regularPhone.test(str))
        return null;
    const cleanLine = str.replace(/\D/g, '');
    return cleanLine.replace(/^\+?38/g, '');
}
console.log(validPhone("+380 44 364 83 65"));
console.log(validPhone("380 44 364 83 65"));
console.log(validPhone("+380-44-364-83-65"));
console.log(validPhone("380-44-364-83-65"));
console.log(validPhone(" + 380--- 44__ 364 \t 83 65"));
console.log(validPhone("380443648365"));
console.log(validPhone("0-44-364-83-65"));
console.log(validPhone(`380-44" +
364-83-65`));