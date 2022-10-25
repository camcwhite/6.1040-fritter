import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

export type Topic = {
  _id: Types.ObjectId;
  name: string;
};

const TopicSchema = new Schema<Topic>({
  name: {
    type: String,
    required: true
  }
});

const TopicModel = model<Topic>('Topic', TopicSchema);
export default TopicModel;
