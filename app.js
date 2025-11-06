const express = require('express');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

// المسار المطلوب للمشروع
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// مسار افتراضي (اختياري)
app.get('/', (req, res) => {
  res.send('Hello, DevOps World!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});