import { Component } from '@angular/core';
import { PageComponent } from "./page/page.component";
import { ProfileComponent } from "./profile/profile.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageComponent, ProfileComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-angular';
}
