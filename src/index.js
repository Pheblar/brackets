module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let opened = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    let closed = {
        '}': true,
        ']': true,
        ')': true
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (opened[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (opened[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}
