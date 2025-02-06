import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(public router: Router){};
  public username:string = "";
  public email:string="";
  public password:string="";
  public confirmPass:string="";
public userInfo:Array<{username:string, email:string, password:string}>=[];

// public userInfo:{username:string, email:string, password:string}[]=[]
public storage = JSON.parse(localStorage.getItem("userInfo")!) || [];//unNull method

ngOnInit() {
  // this will automatically display DB info on screen
  const DBInfo = localStorage.getItem('userInfo');
  if (DBInfo) {
    this.userInfo = JSON.parse(DBInfo);
  }
}

addUser(){
  console.log(this.username, this.email, this.password);
  if(this.username ==""){
    alert("Username cannot be empty");
    return;
  }
  if(this.password.length<=7){
    alert("password must be 8 char");
    return;
  }
  if(this.password !== this.confirmPass){
    alert("password does not match");
    return;
  }
  let data = {
    username: this.username,
    email: this.email,
    password: this.password
  }
  this.storage.push(data)
  localStorage.setItem('userInfo', JSON.stringify(this.storage))
  this.router.navigate(["/login"]);
}

editUser(index: number) {
  const userEdit = this.userInfo[index];
  this.username = userEdit.username;
  this.email = userEdit.email;
  this.password = userEdit.password;

}

delUser(index: number) {
  this.userInfo.splice(index, 1);
  localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
}
view(i:number) {
  console.log(i);
  this.router.navigate([`/view/${i}`]);
  
  // const user = this.userInfo[id];
  // console.log(user); // Or you can open a modal or navigate to a detail view
}
}