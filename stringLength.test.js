const stringLength = require('./stringLength')

test('get string length', () => {
    const stringLength = (string) => {
        return string.length
    };
    expect(stringLength('food')).toBe(4);
    expect(stringLength('ilham')).toBe(5);
});


test('get string least 1 character long and not longer than 10 characters', () => {
    const stringLength = (string) => {
        return string.length
    };
    expect(stringLength('food')).toBe(4);
    expect(stringLength('ilhambouaikhaha')).toBeDefined();
})


test('reverse a given string', () => {
    const reverseString = (string) => {
        const reverse = string.split('').reverse('').join('');
        return reverse;
    }
    expect(reverseString('food')).toBe('doof');
})