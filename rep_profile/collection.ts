import type {HydratedDocument, Types} from 'mongoose';
import type {REProfile} from './model';
import REProfileModel from './model';

/**
 * This file contains a class with functionality to interact with profiles stored
 * in MongoDB, including adding, finding, updating, and deleting. Feel free to add
 * additional operations in this file.
 *
 * Note: HydratedDocument<REProfile> is the output of the REProfileModel() constructor,
 * and contains all the information in REProfile. https://mongoosejs.com/docs/typescript.html
 */
class REProfileCollection {
  /**
   * Add a new profile
   *
   * @param {string} name - The name of the profile
   * @return {Promise<HydratedDocument<REProfile>>} - The newly created profile
   */
  static async addOne(name: string): Promise<HydratedDocument<REProfile>> {
    const profile = new REProfileModel({name});
    await profile.save();
    return profile;
  }

  /**
   * Find a profile by profileId.
   *
   * @param {string} profileId - The profileId of the profile to find
   * @return {Promise<HydratedDocument<REProfile>> | Promise<null>} - The profile with the given profilename, if any
   */
  static async findOneById(profileId: Types.ObjectId | string): Promise<HydratedDocument<REProfile>> {
    return REProfileModel.findOne({_id: profileId});
  }

  /**
   * Delete a profile from the collection.
   *
   * @param {string} profileId - The profileId of profile to delete
   * @return {Promise<Boolean>} - true if the profile has been deleted, false otherwise
   */
  static async deleteOne(profileId: Types.ObjectId | string): Promise<boolean> {
    const profile = await REProfileModel.deleteOne({_id: profileId});
    return profile !== null;
  }
}

export default REProfileCollection;
