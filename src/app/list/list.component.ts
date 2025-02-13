import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service1Service } from '../services/service1.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],  // Notice "styleUrls" instead of "styleUrl",
  providers:[PostService]
})
export class ListComponent {
  // countries: any[] = [];
  files: any[]=[];

  constructor(private axios: HttpClient,public myUser: Service1Service,public allPost:PostService){}  // Changed 'axios' to 'httpClient' for clarity.
  ngOnInit() {
    this.allPost.allPost().subscribe
      (data=> {
        // console.log(data);
        // console.log(data.map((pers: any) => pers));
        
        this.files = data.map((pers: any) => pers);
        console.log(this.files);
      },
      (error) => {
        console.log(error);
      } 
    );
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
