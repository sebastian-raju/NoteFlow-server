const json_server = require('json-server');
const cors = require('cors');


const serverApp = json_server.create();
const middleware = json_server.defaults();
const router = json_server.router('db.json');


serverApp.use(middleware);
serverApp.use(router);



const PORT = 8000;

serverApp.listen(PORT, ()=>{
  console.log(`------server is running on PORT :: ${PORT}-------`);
})