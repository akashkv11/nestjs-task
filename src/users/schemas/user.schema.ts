import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  // _id: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, required: true },
  address: {
    street: String,
    country: String,
    pincode: Number,
  },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});
