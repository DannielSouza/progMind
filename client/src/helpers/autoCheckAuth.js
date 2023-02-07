import {verifyUser} from '../helpers/Api';
import { autoAuthenticationUser } from '../redux/user/slice';

export default async function checkAuth(dispatch, navigate){
  let auth = localStorage.getItem("progMindAuth")
  if(auth){
    let authJSON = JSON.parse(auth)
    const verifiedUser = await verifyUser(authJSON.token)

    const userAuth = {
      userEmail: verifiedUser.userEmail,
      userName: verifiedUser.userName,
      token: verifiedUser.token
    }
    dispatch(autoAuthenticationUser(userAuth))
  }
  else{
    navigate('/auth')
  }
}