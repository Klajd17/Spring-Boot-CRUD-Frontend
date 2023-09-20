import {Component, Input, OnInit} from '@angular/core';
import {CloudModels} from "../models/cloud-models";

@Component({
  selector: 'app-cloud-details',
  templateUrl: './cloud-details.component.html',
  styleUrls: ['./cloud-details.component.scss']
})
export class CloudDetailsComponent implements OnInit {
  @Input() selectedItem: CloudModels | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedItem?.vendorPhoneNumber)
  }

}
