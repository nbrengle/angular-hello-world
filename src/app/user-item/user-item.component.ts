import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `
    <p>
        Hello {{ name }}
    </p>
  `,
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name : string;

  constructor() {

  }

  ngOnInit() {
  }

}
