import * as mongoose from "mongoose";

// enum roles {
//   USER,
//   MODERATOR,
//   ADMIN
// }

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  listings: {
    type: [mongoose.SchemaTypes.ObjectId],
    default: [],
  },
});

export default mongoose.model('accounts', AccountSchema);
