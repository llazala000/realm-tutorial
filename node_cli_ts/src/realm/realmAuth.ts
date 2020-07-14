
import {Realm} from ('realm');

const REALM_APP_ID = 'realmtutorials-dcyrc';
const appConfig = {
   id: REALM_APP_ID,
   timeout: 10000,
 };

const app = new Realm.App(appConfig);
let user;

export async function login(email:string, password:string) {
    const credentials = Realm.Credentials.emailPassword(email, password);
    try{
      return await app.logIn(credentials).then(async u =>{
          user = u;
          return user;
      })
    }
    catch(e){
      console.log(e)

      //TODO: how to handle bad password vs. register new user
      // also: registerUser is not valid
      if (e.message == 'invalid username/password'){
        return await app.auth.emailPassword.registerUser(email, password)
        .then(async u =>{
          return u;
      })
      }
    }
  }

export async function logout() {
  user = app.currentUser;
  if (user.identity !== undefined) user.logOut();
  return !user.isLoggedIn;
}

module.exports.user = user;