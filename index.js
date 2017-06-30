var request = require('xhr-request')

module.exports = function (url, options) {
  return new Promise(function (resolve, reject) {
    request(url, {}, function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
