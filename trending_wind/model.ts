import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

export type TrendingWind = {
  _id: Types.ObjectId;
  title: string;
  active: boolean;
  tldr: string;
  arrivalTime: Date;
  freets: Types.ObjectId[];
};

const TrendingWindSchema = new Schema<TrendingWind>({
  title: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  tldr: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: Date,
    required: true
  },
  freets: {
    type: [{type: Schema.Types.ObjectId, ref: 'Freet'}],
    required: true
  }
});

const TrendingWindModel = model<TrendingWind>('TrendingWind', TrendingWindSchema);
export default TrendingWindModel;
