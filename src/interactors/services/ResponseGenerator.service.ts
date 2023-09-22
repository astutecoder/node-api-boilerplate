export const responseGenerator = <T>(data: T, err?: unknown) => {
  const errors = !Array.isArray(err) ? Array(err) : err || [];
  return { data, errors };
};
