/**
 * Get query string value 
 *
 * @function queryStringValue
 * @param {String<*>} string The target query string
 * @param {String} value The particular value
 */

 module.exports = (string, value) => {
  let _string = string;
  let _splitter = value;
  let _splitArray = _string.split('&');
  let _exportValue= null;

   _splitArray.forEach((item) => {
      if(item.includes(_splitter)) {
          _exportValue = item
          .split(_splitter)
          .pop()
          .replace(/[=]/g, "");
      }
  });

  return (_exportValue)
}