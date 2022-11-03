const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Hello sir");
    resp.end();
  })
  .listen(4500);

// function  test (a,b)
// {
//     //return data a and b
//     return a,b;

// }

// test (10,20);

// otherfunction()
// {
//     return "Hello sir";
// }
