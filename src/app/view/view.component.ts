


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public storage: any[] = [];
  public user: any;
  public view: number;

  constructor(public route: ActivatedRoute) {
    // Fetch user data from localStorage
    const userInfo = localStorage.getItem("userInfo");
    this.storage = userInfo ? JSON.parse(userInfo) : [];
    
    //getting the dynamic id from the url
    this.view = parseInt(this.route.snapshot.params["id"]);
  }

  ngOnInit(): void {
    // validating the local storage index
    if (this.storage && this.storage.length > 0 && this.view >= 0 && this.view < this.storage.length) {
      this.user = this.storage[this.view]; // this will access user at selected index
    } else {
      console.error('User data not available or invalid index');
      this.user = null;
    }
    console.log('Storage:', this.storage);
    console.log('User at index:', this.view);
    console.log('Selected User:', this.user);
  }
}



