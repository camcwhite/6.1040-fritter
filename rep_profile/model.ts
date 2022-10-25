import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {Topic} from '../topic/model';

export type RepProfile = {
  _id: Types.ObjectId;
  topics: [Topic];
  weights: [number];
};

const RepProfileSchema = new Schema<RepProfile>({
  topics: {
    type: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    required: true,
    ref: 'Topic'
  },
  weights: {
    type: [Number],
    required: true
  }
});

const RepProfileModel = model<RepProfile>('RepProfile', RepProfileSchema);
export default RepProfileModel;
