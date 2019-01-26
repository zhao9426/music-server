const client = require("./upload");

client.list().then((result)=> {
    console.log(result, ">>>");
}).catch((error)=> {
    console.error("oops!", error);
})