const cds = require("@sap/cds");

module.exports = cds.service.impl( async function(){

this.on("GET" ,"Employee", async (req,next) =>{

var test = "test";
return next();
});


})