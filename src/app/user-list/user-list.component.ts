import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
        <li *ngFor="let name of names">
            <app-user-item [name]="name"> </app-user-item>
        </li>
    </ul>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  names: string[];

  constructor() {
      this.names =['Ari', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit() {
  }

}
