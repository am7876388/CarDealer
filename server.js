const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/Ayush")
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  }
});

const Collection = mongoose.model('Ayush1', dataSchema);

app.use(bodyParser.json());

app.post('/insert-data', (req, res) => {
  const { name, email, subject, notes } = req.body;
  const newData = new Collection({
    name,
    email,
    subject,
    notes
  });
  newData.save()
    .then(() => {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data inserted successfully' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Failed to insert data' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
