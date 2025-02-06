import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(public router: Router){};
public storage = JSON.parse(localStorage.getItem("userInfo")!)
public email:string = "";
public password:string="";

login(){
  let oneUser = this.storage.find((el:{email:string})=>el.email==this.email);
  if(!oneUser){
    alert("User does not exist")
    return;
  }
  if(oneUser.password == this.password){
    localStorage.setItem("current_user", JSON.stringify(oneUser));
    //GUARD
    alert("Login successful")
    this.router.navigate(["dashboard"]);
  }
}
}
