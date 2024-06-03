/**
 * @description
 * Data 타입 어미에 Response 붙이기
 *
 * @example```ts
 * interface ExampleResponse {
 *   exampleData: string
 * }
 *
 * Response<ExampleResponse>
 * ```
 */
export interface Response<Data> {
  timestamp: string;
  code: string;
  message: string;
  data: Data;
}

/**
 * @description
 * Data에는 Json, Form, Query 중 택1
 *
 * @example```ts
 * interface ExampleRequestJson {
 *   exampleData: string
 * }
 *
 * interface ExampleIdentifier {
 *   exampleId: string
 * }
 *
 * Request<ExampleRequestJson, ExampleIdentifier>
 * Request<ExampleRequestJson>
 * ```
 */
export interface Request<Data, Identifier = null> {
  id?: Identifier;
  data: Data;
}
