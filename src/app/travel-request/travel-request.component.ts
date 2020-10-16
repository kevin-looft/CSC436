import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class FlightRequest {
  public fromAirport: string;
  public toAirport: string;
  public date: Date;
  public numPassengers: number;
}

export class Date {
  year: number;
  month: number;
  day: number;
}

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent implements OnInit {

  @Input() validPassengerCounts: number[] = [];
  request = new FlightRequest();
  model: NgbDateStruct;
  showEstimate: boolean;
  estimatedCost: number;

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 25; i++) {
      this.validPassengerCounts.push(i)
    }
  }

  onSubmit(form): void {
    this.showEstimate = true;
    this.estimateCost();
  }

  estimateCost(): void {
    this.estimatedCost = this.request.numPassengers * 150;
  }

}
