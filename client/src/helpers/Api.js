import axios from "axios";


/* CHECK USER'S TOKEN */
async function verifyUser(token) {
  const response = await axios.post(
    "http://localhost:8080/user/check-token",
    {token: token}
  );
  const data = await response.data;

  return data;
}


/* LOGIN USER */
async function loginUser(userData){
  const response = await axios.post("http://localhost:8080/user/login", {
    email: userData.email,
    password: userData.password
  });
  const data = await response.data;

  return data;
}


/* REGISTER USER */
async function registerUser(userData){
  const response = await axios.post("http://localhost:8080/user/register", userData);
  const data = await response.data;

  return data;
}


/* CREATE TOUGHT USER */
async function createThought(newTought, token){
  const response = await axios.post("http://localhost:4000/thought/create", newTought, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  });
  const data = await response.data;

  return data;
}


export { verifyUser, loginUser, registerUser, createThought };
