import test from 'ava';
import * as faker from 'faker';
import { Example } from '../../../src/Example/Example';

test('returnConcatenatedProperties() returns contructor arguments as concatenated string', t => {

    const inputString = faker.random.word();
    const inputNumber = faker.random.number();
    const example = new Example(inputString, inputNumber);

    const result = example.returnConcatenatedProperties();

    t.is(result, `${inputString} ${inputNumber}`);
});
