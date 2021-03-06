// const baseUrl = "loopy-loops.surge.sh"
const baseUrl = "http://localhost:3000"

const loginUser = (loginData) => {
  console.log('baseURL from api helper: ', baseUrl)
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${baseUrl}/auth/login`, opts)
  .then(console.log('url in loginUser: ',baseUrl))
  .then(resp => resp.json())
  .catch(e => e)
}

const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${baseUrl}/users`, opts)
    .then(console.log('url in registerUser: ',baseUrl))
    .then(resp => resp.json())
    .catch(e => e)
}

const readSessions = () => {
  return fetch(`${baseUrl}/sessions`)
    .then(resp => resp.json())
}

const updateUser = (id, data) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify({ user: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/users/${id}`, opts)
    .then(resp => resp.json())
}

const destroyUser = (user_id) => {
  console.log(user_id)
  const opts = {
    method: 'DELETE'
  }
  return fetch(`${baseUrl}/users/${user_id}`, opts)
}

export {
  loginUser,
  readSessions,
  registerUser,
  updateUser,
  destroyUser
}