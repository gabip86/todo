interface ResponseError extends Error {
  status?: number;
}

export const createError = (status: number, message: string) => {
  const error: ResponseError = new Error();
  error.status = status;
  error.message = message;
  return error;
};
