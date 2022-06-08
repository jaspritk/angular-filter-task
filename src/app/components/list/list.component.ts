import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import datajson from '../../../assets/data.json';

interface Data {
  Model: string;
  RAM: string;
  HDD: string;
  Location: string;
  Price: any;
}

interface DataSource {
  Model: String,
  RAM: string,
  RamType: string,
  HDD: string,
  Drive: string,
  Location: string,
  Price: any;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: Data[] = datajson;
  ramList: any = [];
  ramTypeList: any = [];
  hddList: any = [];
  driveList: any = [];
  locationList: any = [];

  //  to store selected values
  ram: any;
  ramtype: any;
  hdd: any;
  drive: any;
  location: any;
  priceRange: any;

  // variables for new dataset
  dataSource: any = [];
  copyData: any = this.dataSource;
  model: any
  ramOnly: any
  ramType: any
  hddOnly: any
  driveType: any
  locationOnly: any
  price: any

  filteredValues = { ram: '', ramType: '', hdd: '', drive: '', location: '', priceRange: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.newData()
    this.valueInRam()
    this.valueInRamType()
    this.valueInHdd()
    this.valueInDrive()
    this.valueInLocation()
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard'])
  }

  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  newData() {
    this.data.forEach(element => {
      this.model = element.Model
      this.ramOnly = element.RAM.slice(0, -4)
      this.ramType = element.RAM.slice(-4, element.RAM.length)
      this.hddOnly = element.HDD.split('S')[0]
      this.driveType = element.HDD.split('B')[1]
      this.locationOnly = element.Location.slice(0, -6)
      this.price = element.Price

      this.dataSource.push({
        Model: this.model,
        RAM: this.ramOnly,
        RamType: this.ramType,
        HDD: this.hddOnly,
        Drive: this.driveType,
        Location: this.locationOnly,
        Price: this.price
      });
    });
  }

  valueInRam() {
    this.ramList = [...new Set(this.dataSource.map((item: any) => item.RAM))]
    return this.ramList
  }

  valueInRamType() {
    this.ramTypeList = [...new Set(this.dataSource.map((item: any) => item.RamType))]
    return this.ramTypeList
  }

  valueInHdd() {
    this.hddList = [...new Set(this.dataSource.map((item: any) => item.HDD))]
    return this.hddList
  }

  valueInDrive() {
    this.driveList = [...new Set(this.dataSource.map((item: any) => item.Drive))]
    return this.driveList
  }

  valueInLocation() {
    this.locationList = [...new Set(this.dataSource.map((item: any) => item.Location))]
    return this.locationList
  }

  applyAllFilters(data: any) {
    this.filteredValues = data;
    this.dataSource = this.copyData.filter((s: any) =>
      (this.filteredValues.ram ? s.RAM == this.filteredValues.ram : true) &&
      (this.filteredValues.ramType ? s.RamType == this.filteredValues.ramType : true) &&
      (this.filteredValues.hdd ? s.HDD == this.filteredValues.hdd : true) &&
      (this.filteredValues.drive ? s.Drive == this.filteredValues.drive : true) &&
      (this.filteredValues.location ? s.Location == this.filteredValues.location : true) &&
      (this.filteredValues.priceRange ? s.Price <= this.filteredValues.priceRange : true)
    );
  }

}