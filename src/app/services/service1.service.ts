import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  public users = ["tunde","tolu","wale","gbenga","tomi"];
  allUsers(){
    return this.users;
  }
  singleUser(index:number){
    return this.users[index]
  }
}
