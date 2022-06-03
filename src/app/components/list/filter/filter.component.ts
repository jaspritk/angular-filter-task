import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input('ramList') ramList: any;
  @Input('ramTypeList') ramTypeList: any;
  @Input('hddList') hddList: any;
  @Input('driveList') driveList: any;
  @Input('locationList') locationList: any;

  @Output() ramEvent: EventEmitter<string> = new EventEmitter();
  @Output() ramTypeEvent: EventEmitter<string> = new EventEmitter();
  @Output() hddEvent: EventEmitter<string> = new EventEmitter();
  @Output() driveEvent: EventEmitter<string> = new EventEmitter();
  @Output() locationEvent: EventEmitter<string> = new EventEmitter();

  selectedRam: string = '';
  selectedRamType: string = ''
  selectedHdd: string = '';
  selectedDrive: string = '';
  selectedLocation: string = '';

  constructor() { }

  ngOnInit(): void { }

  SelectChangeRam(event: any) {
    this.selectedRam = event?.target.value;
    this.ramEvent.emit(this.selectedRam);
  }

  SelectChangeRamType(event: any) {
    this.selectedRamType = event?.target.value;
    this.ramTypeEvent.emit(this.selectedRamType);
  }

  SelectChangeHdd(event: any) {
    this.selectedHdd = event?.target.value;
    this.hddEvent.emit(this.selectedHdd);
  }

  SelectChangeDrive(event: any) {
    this.selectedDrive = event?.target.value;
    this.driveEvent.emit(this.selectedDrive);
  }

  SelectChangeLocation(event: any) {
    this.selectedLocation = event?.target.value;
    this.locationEvent.emit(this.selectedLocation);
  }

  // onRamChange() {
  //   this.ramEvent.emit(this.selectedRam);

  // }

  // onRamTypeChange() {
  //   this.ramTypeEvent.emit(this.selectedRamType);

  // }

  // onHddChange() {
  //   this.hddEvent.emit(this.selectedHdd);
  // }

  // onDriveChange() {
  //   this.driveEvent.emit(this.selectedDrive);
  // }

  // onLocationChange() {
  //   this.locationEvent.emit(this.selectedLocation);
  // }
}
