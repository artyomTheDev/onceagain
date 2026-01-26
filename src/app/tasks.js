// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     console.log("Всего юзеров : ", users.length);
//
//     const simpleUsers = users.map( user => {
//       return {
//         id: user.id,
//         username: user.username
//       };
//     });
//     console.log('Результат первой задачи :');
//     console.log( simpleUsers )
//
//     const emailUsers = users.map( user => user.email)
//     console.log('Мейлы пользователей :')
//     console.log(emailUsers)
//
//     const firstFiveUsers = users.slice(0 , 5);
//
//     console.log(firstFiveUsers);
//
//     const ninthUser = users.find( user => user.id === 9);
//     console.log(ninthUser);
//
//     const citizensUsers = users.filter( user => user.address.city === "Lebsackbury")
//     console.log(citizensUsers);
//
//     const reverseUsers = [...users].reverse();
//     console.log(reverseUsers);
//
//     const longUserName = users.filter( user => user.username.length > 12)
//     console.log('Нкнеймы с длиной более 12 символов:', longUserName)
//
//     const usersWithCom = users.filter( user => user.website.includes('.com')).
//     map( user => user.username.toLowerCase());
//     console.log('Пользователи с почтой оканчивающейся на .com', usersWithCom)
//
//   });

const users = [
  {id: 1, name: 'Анна'},
  {id: 2, name: 'Иван'},
  {id: 3, name: 'Мария'}
];

function removeById(array, targetId) {
  return array.filter( user => user.id !== targetId)
}

console.log(removeById(users, 2))
