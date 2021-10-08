import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
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
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },

  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
    versionKey: false
  },
);

export const User = mongoose.model('user', userSchema)
