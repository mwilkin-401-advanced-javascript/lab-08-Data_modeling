'use strict';

const Products = require('../src/models/categories.js');

const products = new Products();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products Model', () => {

  it('can post() a new product', () => {
    let object = {name: 'Car'};
    return products.post(object)
      .then(record => {
        Object.keys(object).forEach(key => {
          expect(record[key]).toEqual(object[key]);
        });
      });
  });

  it('can get() a product', () => {
    let object = {name: 'Pants'};
    return products.post(object)
      .then(record => {
        return products.get(record._id)
          .then(category => {
            Object.keys(object).forEach(key => {
              expect(category[0][key]).toEqual(object[key]);
            });
          });
      });
  });

  it('can put() a product', () => {
    let object1 = {name: 'Car'};
    let object2 = {name: 'Bike'};
    
    return products.post(object1)
      .then(record => {
        return products.put(record._id, object2)
          .then(category => {
            Object.keys(object2).forEach(key => {
              expect(category[key]).toEqual(object2[key]);
            });
          });

      });
  });

  it('can delete() a product', () => {
    let object1 = {name: 'Car'};
    return products.post(object1)
      .then(record => {
        return products.delete(record._id)
          .then(category => {
            return products.get(category._id)
              .then(subCat => {
                expect(subCat.length).toBe(0);
              });
          });
      });

  });


});