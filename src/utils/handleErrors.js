const handleErrors = error => {
  console.log(error);
  if (error.isBoom) {
    return { ...error.output.payload, status: error.output.payload.statusCode };
  }

  return error;
};

export default handleErrors;
