import { Component } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  storesArray: string[] = ['Belo Horizonte', 'Campinas', 'São Paulo', 'Rio de Janeiro']

}
