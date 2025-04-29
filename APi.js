const express = require('express');
const app = express();
const port = 3000;

// Sample student data
const students = [
  { id: 1, name: 'Ahmed', age: 20 },
  { id: 2, name: 'Sara', age: 21 },
  { id: 3, name: 'Ali', age: 22 },
  { id: 4, name: 'Fatima', age: 19 },
  { id: 5, name: 'Usman', age: 23 },
  { id: 6, name: 'Ayesha', age: 20 },
  { id: 7, name: 'Bilal', age: 22 },
  { id: 8, name: 'Hina', age: 21 },
  { id: 9, name: 'Zain', age: 24 },
  { id: 10, name: 'Mariam', age: 20 }
];

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.get('/students', (req, res) => {
  res.json(students);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
