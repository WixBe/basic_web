function mth(a, b, c) {
    switch (c) {
        case '+':
            return `The result of ${a} ${c} ${b} = ${a + b}`
        case '-':
            return `The result of ${a} ${c} ${b} = ${a - b}`
        case '*':
            return `The result of ${a} ${c} ${b} = ${a * b}`
        case '/':
            if (b === 0) {
                return 'Error: division by zero not supported'
            }
            return `The result of ${a} ${c} ${b} = ${a / b}`
        case '%':
            return `The result of ${a} ${c} ${b} = ${a % b}`
        default:
            return 'Invalid operation'
    }
}

console.log(mth(4, 3, '+'));