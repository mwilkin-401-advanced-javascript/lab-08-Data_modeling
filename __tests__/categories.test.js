'use strict';

const Categories = require('../src/models/categories.js');
// const mongoose = require('mongoose');
// const supertest = require('supertest');
const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories Model', () => {
  let categories;
  beforeEach(() => {
    categories = new Categories;
  });
    describe('constructor', () => {
      it('Can successfully instantiate an empty category', () => {
        expect(categories).toBeDefined();
      });
    });

  it('can POST a new category', () => {
    let object = {name: 'Car'};
    return categories.post(object)
      .then(record => {
        Object.keys(object).forEach(key => {
          expect(record[key]).toEqual(object[key]);
        });
      });
  });

  it('can GET a category', () => {
    let object = {name: 'Tree'};
    return categories.post(object)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(object).forEach(key => {
              expect(category[0][key]).toEqual(object[key]);
            });
          });
      });
  });

  it('can PUT a category', () => {
    let object1 = {name: 'Car'};
    let object2 = {name: 'Boat'};
    return categories.post(object1)
      .then(record => {
        return categories.put(record._id, object2)
          .then(category => {
            Object.keys(object2).forEach(key => {
              expect(category[key]).toEqual(object2[key]);
            });
          });
      });
  });



  

});