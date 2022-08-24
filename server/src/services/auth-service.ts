import { User } from "../models/user";

class AuthService {
  createUser = (profile: any) => User.create(profile);

  userExists = (param: any) => User.findOne(param);

  getUserByEmailAndPassword(body: any) {
    const { email, password } = body;
    console.log(body)
    const user = User.findOne(
      {
        email,
        password,
      },
      { _id: 0 }
    );
  }

  //   editUser(id: string, updateBody: Mortgage) {
  //     return User.findOneAndUpdate({ loanNo: id }, updateBody);
  //   };

  deleteUser = (id: string) =>
    User.deleteOne({
      loanNo: id,
    });
}

export default new AuthService();
