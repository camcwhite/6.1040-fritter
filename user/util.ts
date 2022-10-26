import type {Request} from 'express';
import UserCollection from './collection';
import type {User} from './model';

export async function getCurrentUser(req: Request): Promise<User> {
  if (!req.session.userId) {
    throw new Error('user not logged in');
  }

  return UserCollection.findOneByUserId(req.session.userId);
}
