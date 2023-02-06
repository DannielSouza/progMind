import axios from "axios";

async function verifyUser(token) {

  const response = await axios.post(
    "http://localhost:8080/user/check-token",
    {token: token}
  );
  const data = await response.data;

  return data;
}



export { verifyUser };
