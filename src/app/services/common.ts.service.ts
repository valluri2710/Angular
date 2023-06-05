import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonTsService {
  private _empName:string ="";
  constructor() { }

  get empName(): string {
    return this._empName;
  }

  set empName(value: string) {
    this._empName = value;
  }
}
