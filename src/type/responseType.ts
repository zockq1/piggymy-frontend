export default interface Response<Data> {
  timestamp: string;
  code: string;
  message: string;
  data: Data;
}
