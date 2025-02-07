import {AxiosResponse} from 'axios';

import path  from '@config/Axios';

export class HomeService {
  static all(): Promise<AxiosResponse> {
    return path .api.get('/');
  }
}
