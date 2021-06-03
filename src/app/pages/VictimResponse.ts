export interface VictimResponse<T> {
  status: number;
  message: string;
  body: T;
}
