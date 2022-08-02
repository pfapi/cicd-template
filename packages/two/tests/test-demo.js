'use strict';

const chai = require('chai');

const expect = chai.expect;

// NODE_ENV=test mocha --reporter spec tests/test-demo

describe('Test demo', () => {

    it('simple', async () => {
        console.log('packages/two/tests/test-demo.js running');
        expect(true).is.true;
    });

});