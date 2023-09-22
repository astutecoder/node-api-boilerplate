export interface IRoute {
  path: string;
  handler: CallableFunction | CallableFunction[];
  method: 'get' | 'post' | 'put' | 'delete';
}
