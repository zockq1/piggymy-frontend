export interface Response<Data> {
  timestamp: string;
  code: string;
  message: string;
  data: Data;
}

export interface Request<Data, Identifier = null> {
  id?: Identifier;
  data: Data;
}
