import axios from "axios";

async function verifyUser(token) {

  const response = await axios.post(
    "http://localhost:8080/user/check-token",
    {token: token}
  );
  const data = await response.data;

  return data;
}


async function loginUser(userData){

  const response = await axios.post("http://localhost:8080/user/login", {
    email: userData.email,
    password: userData.password
  });
  const data = await response.data;

  return data;
}



export { verifyUser, loginUser };
