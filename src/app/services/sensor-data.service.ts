// src/app/services/sensor-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorData } from '../models/sensor-data.model';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  private baseUrl = 'http://localhost:8080/api/sensorData'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // Fetches all ponds (unique pondIds)
  getAllPonds(): Observable<SensorData[]> {
    return this.http.get<SensorData[]>(`${this.baseUrl}`);
  }

  // Fetches the latest data for a specific pond by pondId
  getLatestSensorData(pondId: number): Observable<SensorData> {
    return this.http.get<SensorData>(`${this.baseUrl}/latest/${pondId}`);
  }
}
