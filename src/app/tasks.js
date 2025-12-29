fetch('https://jsonplaceholder.typicode.com/users')
.then( answer => answer.json())
.then( data => {
  const result = data.map( user => ({
    id: user.id,
    username: user.username
  }));
  console.log('Result is:', result)
})
.catch(mistake => {
  console.error('Ooops, the problem', mistake)
})
