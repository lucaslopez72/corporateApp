import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class ProductosPage implements OnInit {

  products: any[] = [];

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        id: 1,
        nombre: 'Portátil Dell',
        unidades: 12,
        precio: 1200,
        foto: ''
      },
      {
        id: 2,
        nombre: 'Monitor LG',
        unidades: 8,
        precio: 299,
        foto: ''
      }
    ];
  }
}