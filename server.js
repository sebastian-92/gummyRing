const e = require("express");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const sites = JSON.parse(fs.readFileSync("config.json"));
var cspString = "frame-ancestors 'self'";
sites.links.forEach((link) => {
  cspString += ` https://${link}`;
});
console.log(sites.links);
app.use((req, res, next) => {
  res.set("Content-Security-Policy", cspString);
  next();
});
app.get("/ring", (req, res) => {
  if (req.query.id) {
    var i = parseInt(req.query.id);
    if (i < 0 || i >= sites.links.length) {
      res.status(404).send("Invalid site index :(");
      return;
    }
    if (sites.joinURL && sites.joinURL.length > 0) {
    var errorHTML = `<center><small><a href='${sites.joinURL}'>join</a><small></center>`;
    }
  } else {
    var i = Math.floor(Math.random() * sites.links.length);
       var errorHTML =
      "<center><p>you should include a site index, with the id parameter. otherwise, this is just links to a random site.</p></center>";
  }
 
    var array = sites.links;
    var len = array.length;
    var previous = array[(i + len - 1) % len];
    var next = array[(i + 1) % len];
    res.send(
      `
<!DOCTYPE html>
<!--
    powered by gummyring https://github.com/sebastian92/gummyring
-->

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>gummyring</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="pico.classless.fuchsia.min.css">
    </head>
    <body>
        <center>
        <table border="3px">
            <tr>
                <td><center><p>${sites.ringName}</p></center>${errorHTML}</td>
            </tr>
            <tr>
                <table>
                    <tr>
                <td><center><a href='http://${previous}'><-- prev</a></center></td><td><center>|||</center></td><td><center><a href='http://${next}'>next --></a></center></td>
                    </tr>
                </table>
            </tr>
        </center>
        </table>
    </body>
</html>
`
    );
  }
);
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
