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

  getValueOf<T>(storageKey: string): T | undefined{
    const value = localStorage.getItem(storageKey);
    if(typeof value === 'string')
      return JSON.parse(value);
    return undefined;
  }

  addValueTo<T>(storageKey: string, value:T): T {
    const data = this.getAllValueOf(storageKey);
    data.push(value);
    localStorage.setItem(storageKey,JSON.stringify(data));
    return value;
  }

  updateValueOf<T>(storageKey: string, data:T): void{
    localStorage.setItem(storageKey,JSON.stringify(data));
  }

  removeValue(storageKey: string): void{
    localStorage.removeItem(storageKey);
  }
}
