import type {HydratedDocument, Types} from 'mongoose';
import type {Topic} from './model';
import TopicModel from './model';

/**
 * This file contains a class with functionality to interact with topics stored
 * in MongoDB, including adding, finding, updating, and deleting. Feel free to add
 * additional operations in this file.
 *
 * Note: HydratedDocument<Topic> is the output of the TopicModel() constructor,
 * and contains all the information in Topic. https://mongoosejs.com/docs/typescript.html
 */
class TopicCollection {
  /**
   * Add a new topic
   *
   * @param {string} name - The name of the topic
   * @return {Promise<HydratedDocument<Topic>>} - The newly created topic
   */
  static async addOne(name: string): Promise<HydratedDocument<Topic>> {
    const topic = new TopicModel({name});
    await topic.save();
    return topic;
  }

  /**
   * Find a topic by topicId.
   *
   * @param {string} topicId - The topicId of the topic to find
   * @return {Promise<HydratedDocument<Topic>> | Promise<null>} - The topic with the given topicname, if any
   */
  static async findOneById(topicId: Types.ObjectId | string): Promise<HydratedDocument<Topic>> {
    return TopicModel.findOne({_id: topicId});
  }

  /**
   * Update topic's information
   *
   * @param {string} topicId - The topicId of the topic to update
   * @param {Object} topicDetails - An object with the topic's updated credentials
   * @return {Promise<HydratedDocument<Topic>>} - The updated topic
   */
  static async updateOne(topicId: Types.ObjectId | string, topicDetails: any): Promise<HydratedDocument<Topic>> {
    const topic = await TopicModel.findOne({_id: topicId});
    if (topicDetails.name) {
      topic.name = topicDetails.name as string;
    }

    await topic.save();
    return topic;
  }

  /**
   * Delete a topic from the collection.
   *
   * @param {string} topicId - The topicId of topic to delete
   * @return {Promise<Boolean>} - true if the topic has been deleted, false otherwise
   */
  static async deleteOne(topicId: Types.ObjectId | string): Promise<boolean> {
    const topic = await TopicModel.deleteOne({_id: topicId});
    return topic !== null;
  }
}

export default TopicCollection;
