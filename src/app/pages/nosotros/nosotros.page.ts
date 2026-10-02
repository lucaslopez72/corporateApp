import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class NosotrosPage implements OnInit {

  distancia: number | null = null;
  error = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {

    if (!navigator.geolocation) {
      this.error = 'La geolocalización no está disponible.';
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;

        const oficinaLat = 40.4452;
        const oficinaLon = -3.6115;

        this.distancia = this.calcularDistancia(
          latitud,
          longitud,
          oficinaLat,
          oficinaLon
        );

        console.log('Latitud:', latitud);
        console.log('Longitud:', longitud);
        console.log('Distancia:', this.distancia);

        this.cdr.detectChanges();
      },

      (error) => {

        console.error('Error geolocalización:', error);

        this.error = 'No se pudo obtener la ubicación.';

        this.cdr.detectChanges();
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }

  calcularDistancia(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c = 2 * Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

    return R * c;
  }
}