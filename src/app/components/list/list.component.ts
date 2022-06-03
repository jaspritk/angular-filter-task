import { Component, Input, OnInit } from '@angular/core';
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

  global: any;

  ramList: any = [];
  ramTypeList: any = [];
  hddList: any = [];
  driveList: any = [];
  locationList: any = [];

  priceList: any = [];

  // ram: any;
  // ramtype: any;
  // hdd: any;
  // drive: any;
  // location: any;

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

  // For Filter
  filter: any = []
  ram: any;
  ramtype: any;
  hdd: any;
  drive: any;
  location: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.newData()
    this.valueInRam()
    this.valueInRamType()
    this.valueInHdd()
    this.valueInDrive()
    this.valueInLocation()
    this.valueInPrice()
    // this.customFilterPredicate()


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
      // console.log('this.price>', this.price)
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

  valueInPrice() {

    // this.getMin(this.price, this.price.length)

    this.priceList = [...new Set(this.dataSource.map((item: any) => item.Price))]
    this.priceList.sort(function (a: any, b: any) { return a - b })
    // console.log("this.priceList", this.priceList)
    return this.priceList
  }




  ramEventHandler($event: any) {
    this.ram = $event;
    if ($event !== "select") {
      const x = this.copyData.filter((s: any) => s.RAM == this.ram);
      this.dataSource = x;
      return x;
    }
    this.dataSource = this.copyData
    return this.dataSource
  }

  ramTypeEventHandler($event: any) {
    this.ramtype = $event;
    if ($event !== "select") {
      const x = this.copyData.filter((s: any) => s.RamType == this.ramtype);
      this.dataSource = x;
      return x;
    }
    this.dataSource = this.copyData
    return this.dataSource
  }

  hddEventHandler($event: any) {
    this.hdd = $event;
    if ($event !== "select") {
      const x = this.copyData.filter((s: any) => s.HDD == this.hdd);
      this.dataSource = x;
      return x;
    }
    this.dataSource = this.copyData
    return this.dataSource
  }

  driveEventHandler($event: any) {
    this.drive = $event;
    if ($event !== "select") {
      const x = this.copyData.filter((s: any) => s.Drive == this.drive);
      this.dataSource = x;
      return x;
    }
    this.dataSource = this.copyData
    return this.dataSource
  }

  locationEventHandler($event: any) {
    this.location = $event
    if ($event !== "select") {
      const x = this.copyData.filter((s: any) => s.Location == this.location);
      this.dataSource = x;
      return x
    }
    this.dataSource = this.copyData
    return this.dataSource
  }

}
