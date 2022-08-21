import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getLocationService():Promise<any>{
    return new Promise((resolve, reject) =>{
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lat: resp.coords.latitude, lng: resp.coords.longitude});
        reject("Error. Could not find current position.");
      })
    })
  }
}
