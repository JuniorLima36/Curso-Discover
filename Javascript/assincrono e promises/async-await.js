/*
# Async/await

- maneira de escrever promises
- syntactic sugar
*/
const promessa = new Promise(function(resolve, reject) {
  return resolve('ok')
})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('rodar sempre')
  } 
}
start()

// promessa
//   .then(function(res) {
//     console.log(res)
//   })
//   .catch(function(err) {
//     console.log(err)
//   })
//   .finally(function() {
//     console.log('sempre irei executar')
//   })


// Async/await com fetch
async function start() {
  const url = 'https://api.github.com/users/timmywheels/';
  const user = await fetch(url).then(res => res.json());
  const repos = await fetch(user.repos_url).then(res => res.json());
  console.log(repos);
}
start().catch(e => console.log(e))


// Async/await com axios
async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/timmywheels/')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  } catch (e) {
    console.log(e)
  }
}
fetchRepos()