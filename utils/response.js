export const successRes = (res, message, data, status = 200) => {
  return res.status(status).json({
    code: status,
    message,
    data,
  });
};

export const errorRes = (res, message, status = 500) => {
  return res.status(status).json({
    code: status,
    message,
  });
};
