import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {Topic} from '../topic/model';

export type REProfile = {
  _id: Types.ObjectId;
  topics: [Topic];
  weights: [number];
};

const REProfileSchema = new Schema<REProfile>({
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

const REProfileModel = model<REProfile>('REProfile', REProfileSchema);
export default REProfileModel;
