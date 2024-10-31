// src/app/models/sensor-data.model.ts
export interface SensorData {
  pondId: number;
  pondName: string;
  ph: number;
  rain: number;
  waterLevel: number;
  oxygen: number;
  temperature: number;
}
