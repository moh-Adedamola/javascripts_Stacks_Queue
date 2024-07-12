const{Stack,reverseArray,sumOfEvenNumbers} = require('./arrayStack.js');

test("test to show how the push method works", () => {
    let stack = new Stack();
    stack.pushMethod('cupid');
    stack.pushMethod('gemini');
    stack.pushMethod('mystery');
    stack.pushMethod('daunt');
    expect(stack.getItem()).toEqual(['cupid','gemini','mystery','daunt']);
})

test("test to show how the pop method works", () => {
    let stack = new Stack();
    stack.pushMethod('cupid');
    stack.pushMethod('gemini');
    stack.pushMethod('mystery');
    stack.pushMethod('daunt');
    stack.popMethod('cupid');
    stack.popMethod('gemini');
    expect(stack.getItem()).toEqual(['mystery','daunt']);
})

test("test to show how the peek method works", () => {
    let stack = new Stack();
    stack.pushMethod('cupid');
    stack.pushMethod('gemini');
    stack.pushMethod('mystery');
    stack.pushMethod('daunt');
    let actual = stack.peekMethod(['cupid','gemini','mystery','daunt']);
    let expected = ['cupid'];
    expect(actual).toEqual(expected);

})

test("test to show the reverse array", () => {
    let actual = reverseArray([1, 2, 3, 4, 5]);
    let expected = [5, 4, 3, 2, 1];
    expect(actual).toEqual(expected);

})

test("test to show the reduce method", () => {
    let actual = sumOfEvenNumbers([1, 2, 3, 4, 5]);
    let expected = 6;
    expect(actual).toEqual(expected);

})

