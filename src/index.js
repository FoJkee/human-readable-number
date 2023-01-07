module.exports = function toReadable(number) {
    const ones = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const teens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let a = String(number).split("");
    if (number == 0) {
        return "zero";
    }

    if (number < 10) {
        return ones[number];
    } else if (number < 20) {
        return teens[number];
    }
    // 19 - 99
    if (a.length === 2) {
        if (number > 19) {
            if (+a[1] == 0) {
                return `${tens[a[0] * 10]}`;
            } else {
                return `${tens[a[0] * 10]} ${ones[a[1]]}`;
            }
        }
    }

    // 100 - 999

    if (a.length === 3) {
        if (number > 99) {
            if (+a[1] == 0 && +a[2] == 0) {
                return `${ones[a[0]]} hundred`;
            } else if (+a[1] == 0 && +a[2] != 0) {
                return `${ones[a[0]]} hundred ${ones[a[2]]}`;
            } else if (+a[1] == 1) {
                return `${ones[a[0]]} hundred ${teens[a[1] + a[2]]}`;
            } else if (+a[1] > 1 && +a[2] == 0) {
                return `${ones[a[0]]} hundred ${tens[a[1] + a[2]]}`;
            } else {
                return `${ones[a[0]]} hundred ${tens[a[1] * 10]} ${ones[a[2]]}`;
            }
        }
    }
};
