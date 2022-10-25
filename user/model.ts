import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import {ReactionType} from '../freet/model';
import type {RepProfile} from '../rep_profile/model';

/**
 * This file defines the properties stored in a User
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for User on the backend
export type User = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  username: string;
  password: string;
  dateJoined: Date;
  pistilPoints: number;
  preferences: Types.ObjectId;
  reactionHistory: ReactionType[];
  doneWinds: Types.ObjectId[];
};

// Mongoose schema definition for interfacing with a MongoDB table
// Users stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const UserSchema = new Schema<User>({
  // The user's username
  username: {
    type: String,
    required: true
  },
  // The user's password
  password: {
    type: String,
    required: true
  },
  // The date the user joined
  dateJoined: {
    type: Date,
    required: true
  },
  pistilPoints: {
    type: Number,
    required: true
  },
  preferences: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'REProfile'
  },
  reactionHistory: {
    type: [String],
    enum: Object.values(ReactionType)
  },
  doneWinds: {
    type: [{type: Schema.Types.ObjectId, ref: 'TrendingWind'}],
    required: true
  }
});

const UserModel = model<User>('User', UserSchema);
export default UserModel;
