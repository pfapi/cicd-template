'use strict';

const chai = require('chai');
const three = require('../src');

const expect = chai.expect;

// NODE_ENV=test mocha --reporter spec tests/test-demo

describe('Test demo', () => {

    it('simple', async () => {
        console.log('packages/three/tests/test-demo.js running');
        expect(three()).equals('three');
    });

});