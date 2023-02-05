function getToken(req){

  const authHeader = req.headers.authorization

  if(authHeader === undefined) return null

  const token = authHeader.split(" ")[1]
  return token
}

module.exports = getToken