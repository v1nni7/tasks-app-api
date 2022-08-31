const handleConflictError = (message: string) => {
  return {
    status: 409,
    type: "conflict",
    message: message,
  };
};

export { handleConflictError };
