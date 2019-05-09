const baseUrl = "http://localhost:3000"

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
    .catch(e => e)
}

export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${baseUrl}/users`, opts)
    .then(resp => resp.json())
    .catch(e => e)
}

const createSession = (data) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ session: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/sessions`, opts)
    .then(resp => resp.json())
}

const readSessions = () => {
  return fetch(`${baseUrl}/sessions`)
    .then(resp => resp.json())
}

const updateSession = (id, data) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify({ session: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/sessions/${id}`, opts)
    .then(resp => resp.json())
}

const destroySession = (id) => {
  const opts = {
    method: 'DELETE'
  }
  return fetch(`${baseUrl}/sessions/${id}`, opts)
}

export {
  createSession,
  readSessions,
  updateSession,
  destroySession
}