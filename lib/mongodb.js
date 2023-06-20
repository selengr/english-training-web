import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

// Define the user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  confirmPassword: String,
});

// Create the user model
const User = mongoose.model('User', userSchema);

// Connect to the MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

// Define the API endpoint for handling the registration request
export async function POST(req, res) {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    await newUser.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving user to DB:', error.message);
    return NextResponse.json({ message: `Server error: ${error.message}` });
  }
}
