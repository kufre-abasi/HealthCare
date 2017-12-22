import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {AppConstants} from '../../app.constants';
import 'rxjs/add/operator/toPromise';
import {LocalStorage} from '../../app.localStorage';

@Injectable()
export class GetusersService {

  constructor(private  http: Http, private localStorage: LocalStorage) {
  }


  createHeaders(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('x-user-token', this.localStorage.getItem('token'));
  }


  getUsers(role): Promise<any> {

    const headers = new Headers();
    this.createHeaders(headers);
    return this.http.get(AppConstants.serverUrl + '/getusers/' + role, {headers: headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log('in service')
    console.log('GETTING USER : ' + res);
    return res.json();
  }

  private handleError(error): Promise<any> {
    console.log(error);
    return Promise.reject(error);
  }
}
