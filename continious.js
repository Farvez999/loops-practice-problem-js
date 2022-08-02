var numbers = [34, 45, 47, 85, 86, 78, 80, 399, 56];
for (i = 0; i <= numbers.length; i++) {
    var number = numbers[i];
    if (number > 80) {
        continue;
    }
    console.log(number);
}