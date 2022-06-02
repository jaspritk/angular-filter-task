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

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: Data[] = datajson;
  copyData: Data[] = datajson;

  ramList: any = [];
  hddList: any = [];
  locationList: any = [];

  ram: any;
  hdd: any;
  location: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.valueInRam()
    this.valueInHdd()
    this.valueInLocation()
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard'])
  }

  valueInRam() {
    this.ramList = [...new Set(this.data.map((item: any) => item.RAM))]
    this.ramList.sort(function (a: any, b: any) { return a - b })
    return this.ramList
  }

  valueInHdd() {
    this.hddList = [...new Set(this.data.map((item: any) => item.HDD))]
    this.hddList.sort(function (a: any, b: any) { return a - b });
    return this.hddList
  }

  valueInLocation() {
    this.locationList = [...new Set(this.data.map((item: any) => item.Location))]
    this.locationList.sort();
    return this.locationList
  }

  ramEventHander($event: any) {
    this.ram = $event;
    console.log("ram from parent:", this.ram)
    const x = this.copyData.filter((s: any) => s?.RAM == this.ram);
    console.log("ram:", x)
    this.data = x;
    return x;
    // this.data.map((s: any) => s.RAM == this.ram)
  }

  hddEventHander($event: any) {
    this.hdd = $event;
    console.log("hdd from parent:", this.hdd)
    const y = this.copyData.filter((s: any) => s?.HDD == this.hdd);
    console.log("ram:", y)
    this.data = y;
    return y;
  }

  locationEventHander($event: any) {
    this.location = $event;
    console.log("location from parent:", this.location)
    const z = this.copyData.filter((s: any) => s?.Location == this.location);
    console.log("ram:", z)
    this.data = z;
    return z;
  }
}
