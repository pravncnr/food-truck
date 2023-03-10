const {HTTP_RESPONSE_CODE} = require("../config/constants");


module.exports = class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_RESPONSE_CODE.BAD_REQUEST;
    this.name = "ValidationError";
  }
};