const express = require('express');

const app = express();

app.get('/courses', (request, response) => {
  response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
  ]);
});

app.post('/courses', (request, response) => {
  response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
    "Curso 4",
  ]);
});

app.post('/courses', (request, response) => {
  response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
    "Curso 4",
  ]);
});

app.put('/courses/:id', (request, response) => {
  response.json([
    "Curso 5",
    "Curso 6",
    "Curso 7",
    "Curso 8",
  ]);
});

app.patch('/courses/:id', (request, response) => {
  response.json([
    "Curso 9",
    "Curso 10",
    "Curso 11",
    "Curso 12",
  ]);
});

app.delete('/courses/:id', (request, response) => {
  response.json([
    "Curso 9",
    "Curso 10",
    "Curso 12",
  ]);
});

app.listen(3333);