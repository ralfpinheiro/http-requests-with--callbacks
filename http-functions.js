module.exports = function getHTML(requestOptions, callback) {
  var https = require("https");
  var obj = {};
  obj.host = requestOptions.host;
  obj.path = requestOptions.path;

  var buffer = "";
  https
    .request(obj, function(response) {
      response.on("data", function(chunk) {
        buffer += chunk;
      });
      response.on("end", function() {
        callback(buffer);
      });
    })
    .end();
};

// function printHTML(html) {
//   console.log(html);
// }
