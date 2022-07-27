import { User } from '../models/user';
import { Mortgage } from '../types/types';

class ProfileService {

  createProfile = (profile: any) => User.create(profile);
  
  getAllProfiles = () => User.find({}, { _id: 0 });

  profileExists = (param: any) => User.findOne(param);
  
  getProfileById(id: string) {
    User.findOne(
      {
        loanNo: id
      },
      { _id: 0 }
    );
  }

  editProfile(id: string, updateBody: Mortgage) {
    return User.findOneAndUpdate({ loanNo: id }, updateBody);
  };

  deleteProfile = (id: string) =>
    User.deleteOne({
      loanNo: id
    });
}

export default new ProfileService();
