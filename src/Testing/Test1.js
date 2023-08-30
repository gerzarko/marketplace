// import http from 'k6/http';
// import {sleep} from 'k6';

// export let options = {
//     vus: 1000,
//     duration: '30s',
// }

// export default function () {
//   let res = http.get('https://todoservis.com/');
//     console.log(res.status);

//     sleep(5)

// }

// import http from 'k6/http';

// export default function () {
//   const url = 'https://todoservis.com/login';
//   const payload = JSON.stringify({
//     email: 'germanzarkovich@gmai.com',
//     password: '123456',
//   });

//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   http.post(url, payload, params);
// }

// Import necessary modules
import { check } from "k6";
import http from "k6/http";

export default function () {
  // define URL and request body
  const url = "https://todoservis.com/login";
  const payload = JSON.stringify({
    email: 'germanzarkovich@gmai.com',
    password: '123456',
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // send a post request and save response as a variable
  const res = http.post(url, payload, params);

  // check that response is 200
  check(res, {
    "response code was 200": (res) => res.status == 200,
  });
}
