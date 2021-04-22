"use strict";

const supertest = require("supertest");
const { test } = require('@jest/globals');
const db = require("../config/database");
const timeModel = require("../src/models/timeModel");
const app = require("../config/config");

afterAll( done => {
  db.close();
  done();
});

describe('GET /api/getTimes', () => {
  test('respond with json containing a list of all times',  done => {
    supertest(app).get('/api/getTimes')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('POST /api/addTime', () => {
  test('respond with 200 created',  done => {
    const data = {
      second: '10',
      minute: '02'
    }
    supertest(app).post('/api/addTime')
    .send(data)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(err => {
      if (err) return done(err);
      done();
    });
  });

  test('respond with 500 if exist an error with the minutes parameter',  done => {
    const data = {
      second: '10',
      minute: true
    }
    supertest(app).post('/api/addTime')
    .send(data)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500)
    .end(err => {
      if (err) return done(err);
      done();
    });
  });
  test('respond with 500 if exist an error with the seconds parameter',  done => {
    const data = {
      second: 'true',
      minute: '10'
    }
    supertest(app).post('/api/addTime')
    .send(data)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(500)
    .end(err => {
      if (err) return done(err);
      done();
    });
  });
});
