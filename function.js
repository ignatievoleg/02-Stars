
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
console.log();

function generate2() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++)
        if ((i === 1 || i === 7) || (j === 1 || j === 7)){
            res = res + ' *';
        } else {
            res = res + '  ';
        }
        res = res + '\n';
    }
    return res;

}

console.log(generate2());
console.log();

function generate3() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++)
            if (i === 1 || j === 1 || i + j === 8){
                res = res + ' *';
            } else {
                res = res + '  ';
            }
        res = res + '\n';
    }
    return res;

}

console.log(generate3());
console.log();


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
console.log();

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
console.log();

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
console.log();


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
console.log();

function generate8() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if ( i === 1 || (i === j && i <= 4) || (i + j === 8 && i <=4)) {
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
console.log();

function generate9() {
    let res = '';

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 7; j++) {
            if ( i === 7 || (i === j && i >= 4) || (i + j === 8 && i >=4)) {
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
console.log();