const assert = require('assert');
const MathOrder = require('../MathOrder');

const mathOrder = new MathOrder();

const pass1 = '{{{}}[()()()]}';
const pass2 = '{[()()()((())())][()]}';
const fail1 = '((())';
const fail2 = '((()))(';
const fail3 = ')))(((';

const assertFunction = (string, required) => {
    console.log(`String: ${string} Should return: ${required}`);
    assert.equal(mathOrder.isOrdered(string), required);
};

describe('Math order', function() {
    describe('Pass1', function() {
        it('should return true', () => assertFunction(pass1, true))
    });

    describe('Pass2', function() {
        it('should return true', () => assertFunction(pass2, true))
    });

    describe('Fail1', function() {
        it('should return false', () => assertFunction(fail1, false))
    });

    describe('Fail2', function() {
        it('should return false', () => assertFunction(fail2, false))
    });

    describe('Fail3', function() {
        it('should return true', () => assertFunction(fail3, false))
    });
});


