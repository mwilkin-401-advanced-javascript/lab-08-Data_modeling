'use strict';

const Products = require('../src/models/categories.js');

const products = new Products();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products Model', () => {

  it('can POST a new product', () => {
    let object = {name: 'Car'};
    return products.post(object)
      .then(record => {
        Object.keys(object).forEach(key => {
          expect(record[key]).toEqual(object[key]);
        });
      });
  });



});