const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

let users = [
  { id: 1, userId: 'admin', password: 'admin', role: 'Admin' },
  { id: 2, userId: 'user', password: 'user', role: 'General User' }
];

let records = [
  { id: 1, userId: 'admin', data: 'Admin Record 1' },
  { id: 2, userId: 'user', data: 'User Record 1' }
];

app.use(cors());
app.use(express.json());

// Login endpoint
app.post('/api/login', (req, res) => {
  const { userId, password } = req.body;
  const user = users.find(u => u.userId === userId && u.password === password);
  
  if (user) {
    setTimeout(() => {
      res.json({ success: true, user });
    }, req.query.delay || 0);
  } else {
    res.status(401).json({ success: false });
  }
});

// Records endpoint
app.get('/api/records', (req, res) => {
  const userId = req.query.userId;
  const userRecords = records.filter(r => r.userId === userId);
  setTimeout(() => {
    res.json(userRecords);
  }, req.query.delay || 0);
});

// Admin users endpoint
app.get('/api/users', (req, res) => {
  setTimeout(() => {
    res.json(users);
  }, req.query.delay || 0);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));