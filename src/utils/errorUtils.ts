const handleConflictError = (message: string) => {
  return {
    status: 409,
    type: "conflict",
    message: message,
  };
};

const handleNotFoundError = (message: string) => {
  return {
    status: 404,
    type: "not found",
    message: message,
  };
};

const handleUnauthorizedError = (message: string) => {
  return {
    status: 401,
    type: "unauthorized",
    message: message,
  };
};

export { handleConflictError, handleNotFoundError, handleUnauthorizedError };
