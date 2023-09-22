export interface IResponse<T> {
  data: T;
  errors: Record<string, unknown>[];
}
