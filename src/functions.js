function generate1() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            res = res + ' *';
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate1());

function generate2() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++)
            if ((i === 1 || i === 7) || (j === 1 || j === 7)) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        res = res + '\n';
    }
    return res;

}

console.log(generate2());

function generate3() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++)
            if (i === 1 || j === 1 || i + j === 8) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        res = res + '\n';
    }
    return res;

}

console.log(generate3());

function generate4() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if (j === 1 || i === 7 || i === j) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate4());

function generate5() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if (j === 7 || i === 7 || i + j === 8) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate5());

function generate6() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if (j === 7 || i === 1 || i === j) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate6());

function generate7() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if (i + j === 8 || i === j) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate7());

function generate8() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if (i === 1 || (i === j && i <= 4) || (i + j === 8 && i <= 4)) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate8());

function generate9() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if (i === 7 || (i === j && i >= 4) || (i + j === 8 && i >= 4)) {
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate9());


module.exports = {generate1, generate2, generate3, generate4, generate5, generate6, generate7, generate8, generate9};