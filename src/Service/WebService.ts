import { request } from "http";

export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

export default class WebService {
  private host: string;
  private port: number;
  private protocol: string;

  constructor(host: string = "dev.watchman.com", port: number = 80, protocol: string = "http") {
    this.host = host;
    this.port = port;
    this.protocol = protocol;
  }

  apiEndpoint = "http://localhost:4000";
  private getPath = (path: string): string => {
    return `${this.apiEndpoint}${path}`;
  };

  http = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
    return new Promise((resolve, reject) => {
      let response: IHttpResponse<T>;
      fetch(request)
        .then((res) => {
          response = res;
          return res.json() as Promise<T>;
        })
        .then((body) => {
          if (response.status != 500) {
            response.parsedBody = body;
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  get = async <T>(
    path: string,
    args: RequestInit = {
      method: "get",
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ): Promise<IHttpResponse<T>> => {
    return await this.http<T>(new Request(this.getPath(path), args));
  };
}
