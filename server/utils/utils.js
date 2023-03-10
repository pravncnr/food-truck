const {HTTP_RESPONSE_CODE} = require("../config/constants");
const ValidationError = require("../customErrors/ValidationError");
const NotFoundError = require("../customErrors/NotFoundError");


function handleError(err, res) {
  console.log("handling error");
  console.log(typeof err);
  console.log(err);
  if (err instanceof ValidationError) {
    res.status(HTTP_RESPONSE_CODE.BAD_REQUEST).send({message: err.message});
  } else if (err instanceof NotFoundError) {
    res.status(HTTP_RESPONSE_CODE.NOT_FOUND).send({message: err.message});
  } else {
    res.status(HTTP_RESPONSE_CODE.INTERNAL_SERVER_ERROR).send({message: err.message});
  }
}


module.exports = {handleError};