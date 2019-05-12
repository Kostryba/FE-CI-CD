import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'learning';
  public users: any[] = [];

  constructor(private http: HttpClient) {

  }
  public getAllUsers(): void {
    this.http.get<any[]>('http://ec2-3-16-216-58.us-east-2.compute.amazonaws.com/users').subscribe( data => {
      console.log('data', data);
      this.users = data;
    })
  }
}

