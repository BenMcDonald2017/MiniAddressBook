import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini AddressBook';

  columnDefs = [
    {headerName: 'NAME', field: 'name'},
    {headerName: 'EMAIL', field: 'email'},
    {headerName: 'PHONE', field: 'phone'}
  ];

  rowData = [
      {name: 'John Doe', email: 'john@doe.com', phone: '562 (413) 2242'},
      {name: 'Si Mona', email: 'si@test.com', phone: '562 (413) 2882'},
  ];
}
