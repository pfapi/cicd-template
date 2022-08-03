'use strict';

const one = require('@pfapi/cicd-test-one');
const two = require('@pfapi/cicd-test-two');

module.exports = () => {
    console.log('*** three is running!');
    console.log('call one', one());
    console.log('call two', two());
    return 'three';
}