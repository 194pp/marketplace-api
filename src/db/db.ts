import mongoose from "mongoose";
import dotenv from "dotenv";
import Account from './schemas/account';
dotenv.config();

async function main() {
  await mongoose.connect(process.env.db);
  const testAccount = new Account({
    username: 'John',
    password: '6574547',
    firstName: 'John',
    lastName: 'Cena',
    email: 'johnCena@gmail.com',
    phone: '354654',
  });
  await testAccount.save();
  console.log(testAccount);

}

export default main();
