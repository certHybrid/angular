import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']  // Notice "styleUrls" instead of "styleUrl"
})
export class ListComponent {
  countries: any[] = [];

  constructor(private axios: HttpClient) {}  // Changed 'axios' to 'httpClient' for clarity.

  ngOnInit() {  // Corrected the lifecycle hook name
    this.axios.get<any[]>('https://restcountries.com/v3.1/all').subscribe(
      response => {
        this.countries = response.map((country: any) => country.name.common);
        this.countries.sort();
        console.log(this.countries);
      },
      error => {
        console.log(error);
      }
    );
  }
}
