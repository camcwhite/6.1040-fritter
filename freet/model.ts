import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import { RepProfile } from '../rep_profile/model';
import type {User} from '../user/model';

/**
 * This file defines the properties stored in a Freet
 * DO NOT implement operations here ---> use collection file
 */

export type ReactionCounts = {
  [key in ReactionType]: number
}

// Type definition for Freet on the backend
export type Freet = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: Types.ObjectId;
  dateCreated: Date;
  content: string;
  pistilPoints: number;
  attachments: string[];
  recProfile: Types.ObjectId;
  reactionCounts: ReactionCounts;
};

export type PopulatedFreet = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: User;
  dateCreated: Date;
  content: string;
  pistilPoints: number;
  attachments: string[];
  recProfile: RepProfile;
  reactionCounts: ReactionCounts;
};

export enum ReactionType {
  SURPRISED = 'surprised',
  AGREED = 'agreed',
  HMMM = 'hmmm'
}

// Mongoose schema definition for interfacing with a MongoDB table
// Freets stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const FreetSchema = new Schema<Freet>({
  // The author userId
  authorId: {
    // Use Types.ObjectId outside of the schema
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  // The date the freet was created
  dateCreated: {
    type: Date,
    required: true
  },
  // The content of the freet
  content: {
    type: String,
    required: true
  },
  pistilPoints: {
    type: Number,
    required: true
  },
  attachments: {
    type: [String],
    required: true
  },
  recProfile: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'REProfile'
  },
  reactionCounts: {
    type: Schema.Types.Mixed,
    required: true
  }
});

const FreetModel = model<Freet>('Freet', FreetSchema);
export default FreetModel;
