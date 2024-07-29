const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const cors = require('cors');

// This server is used by the shell app to get the micro-frontend bundles

app.use(cors());

app.get('/', (_req, res) => {
  res.send('Hello from server!');
});

// route for mfe1
app.get('/mfe1', (_req, res) => sendMicroFrontend(res, 'mfe1/bundle.js'));

// route for mfe2
app.get('/mfe2', (_req, res) => sendMicroFrontend(res, 'mfe2/bundle.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});

const sendMicroFrontend = async (res, bundlePath) => {
  try {
    const filePath = path.join(__dirname, `../../dist/apps/${bundlePath}`);
    const data = await fs.readFile(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/javascript');
    res.send(data);
  } catch (err) {
    res.status(500).send('Error reading file');
  }
};
