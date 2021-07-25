import { IErrorHandler, ErrResponse } from "./ErrorHandler";
import WebService from "./WebService";

export interface LoadHealthInfo {
  _id: number | string;
  websiteName: string;
  resTime: number;
  isUp: boolean;
  lastDownTime: Date;
  lastRestime: Date;
  updatedAt: Date;
  __v: number;
}

class LoadHealth extends IErrorHandler {
  private webAPI: WebService = new WebService();

  getHealthInfo = async (onSuccess: (r: Array<LoadHealthInfo>) => void) => {
    try {
      const response = this.webAPI.get<Array<LoadHealthInfo>>(`http://localhost:4000/`);
      const r = await response;
      if (r.status === 200 && r.parsedBody) {
        const result = r.parsedBody as Array<LoadHealthInfo>;
        onSuccess(result);
      } else {
        console.log(r.parsedBody);
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export default new LoadHealth();
