import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service1Service } from '../services/service1.service';
import { PostService } from '../services/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],  // Notice "styleUrls" instead of "styleUrl",
  providers:[PostService]
})
export class ListComponent {
  // countries: any[] = [];
  public loading:boolean =false;
  public files: Array<{userId:number, title:string, body:string, id:number}> =[];
  public showFullText: boolean[]=[];


  constructor(private axios: HttpClient,public myUser: Service1Service,public allPost:PostService){}  // Changed 'axios' to 'httpClient' for clarity.
  ngOnInit() {
    this.fetchAllpost()
  }

  fetchAllpost(){
    this.loading = true;
    this.allPost.allPost().subscribe
    (data=> {
      
      this.files = data.map((pers: any) => pers);
      this.loading=false;
      console.log(this.files);
      this.showFullText = new Array(this.files.length).fill(false);

    },
    (error) => {
      console.log(error);
    } 
  );

  }
  showmore(index:number){
this.showFullText[index] = !this.showFullText[index]
  }
}



 // Corrected the lifecycle hook name
    // this.axios.get<any[]>('https://restcountries.com/v3.1/all').subscribe(
    //   response => {
    //     this.countries = response.map((country: any) => country.name.common);
    //     this.countries.sort();
    //     console.log(this.countries);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    // console.log(this.myUser.allUsers());
    // console.log(this.myUser.singleUser(2));
