export class ApiError extends Error {
  public readonly statusCode: Number;

  constructor(message: string, statusCode: Number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequest extends ApiError {
  constructor(message: string) {
    super(message, 400)
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}