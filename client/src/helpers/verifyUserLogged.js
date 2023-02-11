import { autoAuthenticationUser } from "../redux/user/slice"
import { verifyUser } from "./Api"


export async function verifyUserLogged(dispatch, navigate, setShowSidebar){
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
    setShowSidebar(true)
    navigate('/')
  }
  else{
    console.log("Não logado")
  }
}