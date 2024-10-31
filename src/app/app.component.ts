import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserpageComponent } from "./userpage/userpage.component";
import { SensorpageComponent } from "./sensorpage/sensorpage.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserpageComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FishPond';
}
