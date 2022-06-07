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

  @Output() emitEventObject = new EventEmitter();

  ramEvent: any = '';
  ramTypeEvent: any = '';
  hddEvent: any = '';
  driveEvent: any = '';
  locationEvent: any = '';
  priceEvent: any = '';
  selectedRange: any = '';

  eventObject: any = {}

  constructor() { }

  ngOnInit(): void { }

  onChange() {
    this.eventObject = {
      ram: this.ramEvent,
      ramType: this.ramTypeEvent,
      hdd: this.hddEvent,
      drive: this.driveEvent,
      location: this.locationEvent,
      priceRange: this.priceEvent
    }
    this.emitEventObject.emit(this.eventObject);
  }

  clearFilter() {
    this.eventObject = {
      ram: this.ramEvent = '',
      ramType: this.ramTypeEvent = '',
      hdd: this.hddEvent = '',
      drive: this.driveEvent = '',
      location: this.locationEvent = '',
      priceRange: this.priceEvent = ''
    }
    this.emitEventObject.emit(this.eventObject);
  }
}
