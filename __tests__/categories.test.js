'use strict';

const Categories = require('../src/models/categories.js');
const mongoose = require('mongoose');
const supertest = require('supertest');

describe('Categories Module', () => {
  let categories;
  beforeEach(() => {
    categories = new Categories;

    describe('constructor', () => {
      it('Can successfully instantiate an empty category', () => {
        expect(categories).toBeDefined();
      });
    });
  });
});