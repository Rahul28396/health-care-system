import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getAllValueOf<T>(storageKey: string): Array<T>{
    const list = localStorage.getItem(storageKey);
    if(typeof list === 'string')
      return JSON.parse(list);
    return [];
  }

  addValueTo<T>(storageKey: string, value:T): T {
    const data = this.getAllValueOf(storageKey);
    data.push(value);
    localStorage.setItem(storageKey,JSON.stringify(data));
    return value;
  }

  updateValueOf<T>(storageKey: string, data:Array<T>): void{
    localStorage.setItem(storageKey,JSON.stringify(data));
  }
}
