export class NotFoundError extends Error {
  public statusCode = 404;

  constructor(public message: string) {
    super(message);
  }
}
