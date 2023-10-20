const url = "http://localhost:5700/api"

// GET
function getUsers() {
  axios.get(url)
    .then(res => {
      apiResult.textContent = JSON.stringify(res.data)
    })
    .catch(function (error) { 
      console.error(error)
    })
}

// GET com parametros
function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(res => {
      const data = res.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userId.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch(function (error) { 
      console.error(error)
    })
}

// POST
function addUser(newUser) {
  axios.post(url, newUser)
    .then(res => {
      console.log(res)
    })
    .catch(function (error) {
      console.error(error)
    })
}
const newUser = {
  name: "Carlos silva",
  avatar: 'http://picsum.photos/400/200',
  city: 'Rio de janeiro'
}

// PUT
function updateUser(updatedUser, id) {
  axios.put(`${url}/${id}`, updatedUser)
    .then(res => {
      console.log(res)
    })
    .catch(function (error) {
      console.error(error)
    })
}
const updatedUser = {
  name: "Manoel santos",
  avatar: 'http://picsum.photos/400/200',
  city: 'Curitiba'
}

// DELETE
function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(function (error) {
      console.error(error)
    })
}

getUsers()
getUser(5)
// addUser(newUser)
// updateUser(updatedUser, 5)
// deleteUser(2)