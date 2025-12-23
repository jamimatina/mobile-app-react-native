import { Parser } from 'json2csv';

class MobileAppParser {
  constructor() {
    this.parser = new Parser();
  }

  parse(data) {
    return this.parser.parse(data);
  }

  parseToCSV(data) {
    return this.parser.parse(data, { fields: ['field1', 'field2'] });
  }
}

export default MobileAppParser;