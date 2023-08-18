import { Injectable } from '@angular/core';
declare var google: any;
@Injectable({
  providedIn: 'root'
})
export class AddressLoaderService {
  private readonly googleMapsScriptSrc = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCBkI0mmX1g7HhPBgp_2-fyRZLUvup4Vzk&libraries=places';

  loadGoogleMapsScript(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (typeof google !== 'undefined') {
        resolve();
      } else {
        const script = document.createElement('script');
        script.onload = () => {
          resolve();
        };
        script.onerror = () => {
          reject('Failed to load Google Maps API.');
        };
        script.src = this.googleMapsScriptSrc;
        document.head.appendChild(script);
      }
    });
  }
}
