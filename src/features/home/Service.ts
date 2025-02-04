import {AxiosResponse} from 'axios';

import {api} from '@config/Axios';

export class HomeService {
  static all(): Promise<AxiosResponse> {
    return api.get('/');
  }
}
