import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();
const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const email = process.env.ADMIN_EMAIL;
  const pwd = process.env.ADMIN_PASSWORD;
  const exists = await User.findOne({ email });
  if (exists) { console.log('Admin exists'); process.exit(0); }
  const admin = await User.create({ name: 'Admin', email, password: pwd, role: 'admin' });
  console.log('Admin created:', admin.email);
  process.exit(0);
};
run().catch(err => { console.error(err); process.exit(1); });
