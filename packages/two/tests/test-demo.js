'use strict';

const chai = require('chai');
const two = require('../src');

const expect = chai.expect;

// NODE_ENV=test mocha --reporter spec tests/test-demo

describe('Test demo', () => {

    it('simple', async () => {
        console.log('packages/two/tests/test-demo.js running');
        expect(two()).equals('two');
    });

});