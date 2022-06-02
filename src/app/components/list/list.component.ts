import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import datajson from '../../../assets/data.json';

interface Data {
  Model: string;
  RAM: string;
  HDD: string;
  Location: string;
  Price: string;
}

interface DataSource {
  Model: String,
  RAM: string,
  RamType: string,
  HDD: string,
  Drive: string,
  Location: string,
  Price: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: Data[] = datajson;

  global: any;

  ramList: any = [];
  ramTypeList: any = [];
  hddList: any = [];
  driveList: any = [];
  locationList: any = [];

  ram: any;
  ramtype: any;
  hdd: any;
  drive: any;
  location: any;

  // variables for new dataset
  dataSource: DataSource[] = []
  copyData: DataSource[] = this.dataSource;
  model: any
  ramOnly: any
  ramType: any
  hddOnly: any
  driveType: any
  locationOnly: any
  price: any

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

  newData() {
    this.data.forEach(element => {
      this.model = element.Model
      this.ramOnly = element.RAM.slice(0, -4)
      this.ramType = element.RAM.slice(-4, element.RAM.length)
      this.hddOnly = element.HDD.split('S')[0]
      this.driveType = element.HDD.split('B')[1]
      this.locationOnly = element.Location.slice(0, -6)
      this.price = element.Price

      // for (var i = 0; i < 1; i++) {
      this.dataSource.push({
        Model: this.model,
        RAM: this.ramOnly,
        RamType: this.ramType,
        HDD: this.hddOnly,
        Drive: this.driveType,
        Location: this.locationOnly,
        Price: this.price
      });
      // }
    });
    // console.log(this.dataSource)
  }

  valueInRam() {
    // console.log(this.dataSource)

    this.ramList = [...new Set(this.dataSource.map((item: any) => item.RAM))]
    this.ramList.sort()

    // console.log(this.ramList)
    return this.ramList
  }

  valueInRamType() {
    // console.log(this.dataSource)

    this.ramTypeList = [...new Set(this.dataSource.map((item: any) => item.RamType))]
    this.ramTypeList.sort()

    // console.log(this.ramTypeList)
    return this.ramTypeList
  }

  valueInHdd() {
    this.hddList = [...new Set(this.dataSource.map((item: any) => item.HDD))]
    this.hddList.sort(function (a: any, b: any) { return a - b });
    // console.log(this.hddList)

    return this.hddList
  }

  valueInDrive() {
    this.driveList = [...new Set(this.dataSource.map((item: any) => item.Drive))]
    this.driveList.sort();
    // console.log(this.driveList)

    return this.driveList
  }

  valueInLocation() {
    this.locationList = [...new Set(this.dataSource.map((item: any) => item.Location))]
    this.locationList.sort();
    // console.log(this.locationList)

    return this.locationList
  }

  // EventHandler($event: any) {
  //   if (this.ramEventHander($event)  this.ramTypeEventHander($event) || this.hddEventHander($event) || this.driveEventHander($event) || this.locationEventHander($event)) {
  //     this.dataSource = this.global;

  //   }
  // }

  ramEventHander($event: any) {
    this.ram = $event;
    // console.log("ram from parent:", this.ram)
    const x = this.copyData.filter((s: any) => s.RAM == this.ram);
    // console.log("ram:", x)
    this.dataSource = x;
    return x;
    // this.data.map((s: any) => s.RAM == this.ram)
  }

  ramTypeEventHander($event: any) {
    this.ramtype = $event;
    // console.log("ramtype from parent:", this.ramtype)
    const x = this.copyData.filter((s: any) => s.RamType == this.ramtype);
    // console.log("ramtype:", x)
    this.dataSource = x;
    return x;
    // this.data.map((s: any) => s.RAM == this.ram)
  }

  hddEventHander($event: any) {
    this.hdd = $event;
    // console.log("hdd from parent:", this.hdd)
    const x = this.copyData.filter((s: any) => s.HDD == this.hdd);
    // console.log("ram:", y)
    this.dataSource = x;
    return x;
  }

  driveEventHander($event: any) {
    this.drive = $event;
    // console.log("drive from parent:", this.drive)
    const x = this.copyData.filter((s: any) => s.Drive == this.drive);
    // console.log("drive:", y)
    this.dataSource = x;
    return x;
  }

  locationEventHander($event: any) {
    // if (this.location = 'select') {
    // return this.dataSource;
    // }
    // if (this.location = $event) {
    // const x = this.copyData.filter((s: any) => s.Location == this.location);
    // this.dataSource = x;
    // return x
    // }
    this.location = $event;
    // console.log("location from parent:", this.location)
    const x = this.copyData.filter((s: any) => s.Location == this.location);
    // console.log("ram:", x)
    this.dataSource = x;
    return x;
  }
}
