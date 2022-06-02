import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input('ramList') ramList: any;
  @Input('hddList') hddList: any;
  @Input('locationList') locationList: any;

  @Output() ramEvent: EventEmitter<string> = new EventEmitter();
  @Output() hddEvent: EventEmitter<string> = new EventEmitter();
  @Output() locationEvent: EventEmitter<string> = new EventEmitter();

  selectedRam: string = '';
  selectedHdd: string = '';
  selectedLocation: string = '';

  constructor() { }

  ngOnInit(): void { }

  SelectChangeRam(event: any) {
    this.selectedRam = event?.target.value;
  }

  SelectChangeHdd(event: any) {
    this.selectedHdd = event?.target.value;
  }

  SelectChangeLocation(event: any) {
    this.selectedLocation = event?.target.value;
  }

  onRamChange() {
    this.ramEvent.emit(this.selectedRam);
  }

  onHddChange() {
    this.hddEvent.emit(this.selectedHdd);
  }

  onLocationChange() {
    this.locationEvent.emit(this.selectedLocation);
  }
}
