const url = "http://localhost:5600/api"

// GET
function getUsers() {
  fetch(url)
  .then(res => res.json())
  .then(data => renderApiResult.textContent = JSON.stringify(data))
  .catch(error => console.error(error))
}

// GET com parametros
function getUser(id) {
  fetch(`${url}/${id}`)
  .then(res => res.json())
  .then(data => {
    alertApi.textContent = data
    userName.textContent = data.name
    userCity.textContent = data.city
    userAvatar.src = data.avatar
  })
  .catch(error => console.error(error))
}

// POST
function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => res.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}
const newUser = {
  name: "Carlos silva",
  avatar: 'http://picsum.photos/400/200',
  city: 'Rio de janeiro'
}

// PUT
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => res.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}
const updatedUser = {
  name: 'Marcelo santos',
  avatar: 'http://picsum.photos/400/200',
  city: 'Santos'
}

// DELETE
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => res.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}

getUsers()
getUser(2)
// addUser(newUser)
// updateUser(updatedUser, 7)
// deleteUser(2)