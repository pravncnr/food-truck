const niv = require('node-input-validator');
const ValidationError = require("../customErrors/ValidationError");

module.exports.validator = async function (input, rule) {
  const validate = new niv.Validator(input, rule);
  const isMatched = await validate.check();
  if (!isMatched) {
    throw new ValidationError(JSON.stringify(validate.errors));
  }
  return isMatched;
};
