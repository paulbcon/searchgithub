import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'fde9f1484d474a39b22e';
    private client_secret='4888d113f2d6d4ce05bf26e9abee7553e68d214a';

    constructor(private _http: Http) {

      console.log('Github Service Ready...');
      this.username = 'paulbcon';
    }

     getUser() {
        return this._http.get('http://api.github.com/users/' +
          this.username+'?client_id='+this.client_id+
          '&client_secret='+this.client_secret).map(res => res.json());
     }

      getRepos() {
        return this._http.get('http://api.github.com/users/' +
          this.username+'/repos?client_id='+this.client_id+
          '&client_secret='+this.client_secret).map(res => res.json());
      }

      updateUser(username: string) {
        this.username = username;
      }
}
