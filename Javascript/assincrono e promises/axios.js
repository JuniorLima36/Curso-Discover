import axios from "axios"

axios.get('https://api.github.com/users/timmywheels/').then((res) => {
  console.log(res.data)
})


// promise com axios
axios
  .get('https://api.github.com/users/timmywheels/')
  .then(res => axios.get(res.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(err => console.log(err))


// Promessas em paralelo com promiseAll
Promise.all([
  axios.get('https://api.github.com/users/timmywheels/'),
  axios.get('https://api.github.com/users/timmywheels/repos'),
])
.then(res => {
  console.log(res[0].data.login)
  console.log(res[1].data.length)
})
.catch(err => console.log(err.message))