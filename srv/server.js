
const proxy = require("@sap/cds-odata-v2-adapter-proxy");
const cds = require('@sap/cds');
const xsenv = require("@sap/xsenv");

cds.on("bootstrap", async (app) => {
  app.use(proxy());
  app.get("/getDependencies", (req, res) => {
    console.log(req.headers);
    xsenv.loadEnv();
    const services = xsenv.getServices({
      dest: { tag: "destination" }
    });
    cds.env.mtx.dependencies = [services.dest.xsappname];
    let deps = cds.env.mtx.dependencies.map((m) => {
      return { "xsappname": m }
    });
    res.status(200).json(deps);
  });

});
module.exports = cds.server; 