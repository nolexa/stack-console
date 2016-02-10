var copyfiles = require('copyfiles');

copyfiles(["node_modules/bootstrap/dist/js/bootstrap.js", "vendor/js"], true, function (err) {
    if (err) return console.error(err);
});
copyfiles(["node_modules/bootstrap/dist/css/bootstrap.css", "node_modules/bootstrap/dist/css/bootstrap.css.map",
    "vendor/css"], true, function (err) {
    if (err) return console.error(err);
});