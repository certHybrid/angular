import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  ngOnInit(){
    alert("this is hybrid")
  }
  ngAfterContentChecked(){
    alert("all is well")
  }
  public isLogin:boolean = false;
  public students:Array<string> = ["Daniel","Samuel", "Tobi", "Victor"];
  public users: string[] = ["user1", "user2", "user3", "user4"];
  public arrObj:object[] = [
    {
      name: "Dan",
      gender:"Male",
      qualified: true
    },
    {
      name: "Tolu",
      gender:"Male",
      qualified: false
    },
    {
      name: "Tayo",
      gender:"Female",
      qualified: false
    },
    {
      name: "Seun",
      gender:"Female",
      qualified: true
    }
  ]
  public date = new Date();
  checkDate(){
    let dotw = this.date.getDay()
    switch (dotw){
      case 0 :
        return "Sunday";
      break;
      case 1 :
        return "Monday";
      break;
      case 2 :
        return "Tuesday";
      break;
      case 3 :
        return "Wednesday";
      break;
      case 4 :
        return "Thursday";
      break;
      case 5 :
        return "Friday";
      break;
      case 6 :
        return "Saturday";
      break;
      default:
        return "invalid day";
    }
  }

  toggleForm(){
    this.isLogin =!this.isLogin
  }

}
