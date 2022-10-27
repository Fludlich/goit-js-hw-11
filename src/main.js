
// // const axios = require('axios').default;
// // const axios = require('axios').default;

// import axios from 'axios';
// // axios.get('/user?ID=12345');

// // axios.get('/user?ID=12345')
// //   .then(function (response) {
// //     // handle success
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     // handle error
// //     console.log(error);
// //   })
// //   .finally(function () {
// //     // always executed
// //   });

// // Optionally the request above could also be done as
// // axios.get('/user', {
// //     params: {
// //       ID: 12345
// //     }
// //   })
// //   .then(function (response) {
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   })
// //   .finally(function () {
// //     // always executed
// //   });

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('https://pixabay.com/api/?key=30854424-1209f63ff7d7cc0fa6ddacf5b&q=yellow+flowers&image_type=photo&pretty=true');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUser()