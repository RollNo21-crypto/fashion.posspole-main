const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB Atlas Connection
mongoose.connect('mongodb+srv://maharshivivekanands:posspole5463@posspole.dfu63.mongodb.net/posspole?retryWrites=true&w=majority&appName=posspole', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Define MongoDB Schemas
const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  products: [String],
  time: { type: Date, default: Date.now }
});

const subscriptionSchema = new mongoose.Schema({
  email: String,
  time: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  email: String,
  time: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Create MongoDB Models (Collections)
const Query = mongoose.model('Query', querySchema);
const Subscription = mongoose.model('Subscription', subscriptionSchema);


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html as homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle popup form submission
app.post('/submit-popup', async (req, res) => {
  const { name, email, phone, products } = req.body;
  console.log('✅ New Query:', { name, email, phone, products });

  try {
    const newQuery = new Query({ name, email, phone, products });
    await newQuery.save();
    res.status(200).send('Data is successfully sent');
  } catch (err) {
    console.error('❌ Error saving query:', err);
    res.status(500).send('❌ Failed to save query');
  }
});

// Handle subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '❌ Email is required' });

  console.log(`✅ New Subscription: ${email}`);

  try {
    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    res.status(200).json({ message: '✅ Subscription saved to MongoDB' });
  } catch (err) {
    console.error('❌ Error saving subscription:', err);
    res.status(500).json({ message: '❌ Failed to save subscription' });
  }
});


app.post('/submit-contact', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '❌ Email is required' });

  try {
    const newContact = new Contact({ email });
    await newContact.save();
    console.log('✅ New Contact Submission:', email);
    res.status(200).json({ message: '✅ Email saved successfully' });
  } catch (err) {
    console.error('❌ Error saving email:', err);
    res.status(500).json({ message: '❌ Failed to save email' });
  }
});


// Start server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
