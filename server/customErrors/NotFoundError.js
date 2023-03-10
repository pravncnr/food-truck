const {HTTP_RESPONSE_CODE} = require("../config/constants");

module.exports = class NotFoundError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "NotFoundError";
    this.status = status;
    this.statusCode = HTTP_RESPONSE_CODE.NOT_FOUND;
  }
};