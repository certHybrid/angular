import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public email:string="";
  public username:string="";
  public password:string="";
  public confirmpass:string="";
  profilepic: string | ArrayBuffer | null = null; 
  public reg:any[]=[];


  uploadedIMG(event: any):void{
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            this.profilepic = reader.result;
        };
        reader.readAsDataURL(file);
    }
}

signup(){
  // console.log(this.profilepic);
  
  if(!this.username){
    alert("username cannot be empty");
    return;
  }
  if(!this.email){
    alert("password cannot be empty");
    return;
  }
  if(!this.password){
    alert("password cannot be empty");
    return;
  }
  if(this.password.length<7){
    alert("password cannot be less than 8 characters");
    return;
  }
  if(this.password !== this.confirmpass){
    alert("password do not match");
    return;
  }
  if(this.profilepic==null){
    alert("upload a profile picture");
  }
  let data = {
    username:this.username,
    email:this.email,
    password:this.password,
    profilepic:this.profilepic
  }
  // console.log(data);
  this.reg.push(data);
  console.log(this.reg);
  localStorage.setItem('User_reg', JSON.stringify(this.reg))
}

}
