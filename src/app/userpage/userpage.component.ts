import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  
  ponds = [
    {
      id: 1,
      name: 'Pond 1',
      description: 'A tranquil pond with clear water and a variety of aquatic plants.',
      image: 'https://freshwaterhabitats.b-cdn.net/app/uploads/2023/01/PondWorlds-End-Strensall-1-scaled.jpg'
    },
    {
      id: 2,
      name: 'Pond 2',
      description: 'A large pond known for its vibrant fish and serene surroundings.',
      image: 'https://t3.ftcdn.net/jpg/03/08/60/88/360_F_308608803_h7uIbcaeKXhvLBd36Nk8JfwKJX7nbSR8.jpg'
    },
    {
      id: 3,
      name: 'Pond 3',
      description: 'A small pond, ideal for monitoring rainfall and water level changes.',
      image: 'https://www.tr3dent.com/wp-content/uploads/2017/09/pond7-862x647.jpg'
    }
  ];
}


