const User = require("./user")
class UserBase {

    constructor(userList){
        this.userList = userList;
    }
        count(){
            console.log(this.userList.length);
        }
        getNames(){
            console.log(this.userList.map(n => n.getName()));
                }
                getIntroductions(){
                    console.log(this.userList.map(n => n.getIntroduction()));
                }
}

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];
  const userBase = new UserBase(users);

userBase.count();
  userBase.getNames();
userBase.getIntroductions();

   module.exports = UserBase;




