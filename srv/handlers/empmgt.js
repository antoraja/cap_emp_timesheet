const cds = require("@sap/cds");

module.exports = cds.service.impl( async function(){

this.on("GET" ,"Employee", async (req,next) =>{

var test = "test";
return next();
});

this.before('CREATE', 'Employee', async (req) => {
    // Check if the user has the Admin role
    if (!req.user.is('Admin')) {
      req.reject(403, 'You are not authorized to create orders');
    }
  });


})