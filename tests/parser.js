const xml2js = require('xml2js');

class Parser {
  constructor() {
    this.parser = new xml2js.Parser({
      explicitArray: false
    });
  }

  parseString(xmlString) {
    return new Promise((resolve, reject) => {
      this.parser.parseString(xmlString, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = Parser;