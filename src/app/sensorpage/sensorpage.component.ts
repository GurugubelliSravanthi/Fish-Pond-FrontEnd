import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sensorpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sensorpage.component.html',
  styleUrls: ['./sensorpage.component.css']
})
export class SensorpageComponent {
  sensors = [
    { name: 'pH sensor', value: '7.5', description: 'To maintain pH level of the pond.', icon: '🌡️' },
    { name: 'Oxygen sensor', value: '8 mg/L', description: 'Dissolved oxygen in the pond.', icon: '💧' },
    { name: 'Temperature sensor', value: '25°C', description: 'Water temperature in the pond.', icon: '🌞' },
    { name: 'Water sensor', value: '3 meters', description: 'Current water level in the pond.', icon: '🌊' },
    { name: 'Rain sensor', value: '12 mm', description: 'Rainfall accumulation in the area.', icon: '☔' },
  ];
ponds: any;

}