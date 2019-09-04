import { request } from 'http';
 
const req = request(
  {
    host: 'https://e4c4db8a-8284-41dd-99bf-2cfef40e1d29.mock.pstmn.io',
    path: '/get?MSGID=ACO-C-BONUSPNT-QLST',
    method: 'POST',
  },
  response => {
    console.log(response); // 
  }
);
 
req.end();

