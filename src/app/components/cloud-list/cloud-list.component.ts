import {Component, OnInit} from '@angular/core';
import {CloudService} from "../../services/cloud.service";
import {CloudModels} from "../models/cloud-models";
import {IListResponse} from "../../shared/models/general-response-model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddCloudVendorComponent} from "../add-cloud-vendor-dialog/add-cloud-vendor.component";

@Component({
    selector: 'app-cloud-list',
    templateUrl: './cloud-list.component.html',
    styleUrls: ['./cloud-list.component.scss']
})
export class CloudListComponent implements OnInit {
    cloudVendors: CloudModels[] = [];
    selectedCloudVendor: CloudModels = new CloudModels();
    isSelected: Boolean = false;

    constructor(private cloudService: CloudService, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.getCloudList();
    }

    getCloudList() {
        this.cloudService.getCloudVendorList().subscribe({
            next: (res) => {
                this.cloudVendors = res.data;
                console.log(res.data);
            },
            error: (error) => {
                console.error('Error:', error);
            },
        });
    }

    getCloudById(id: string) {
        this.cloudService.getCloudVendor(id).subscribe({
                next: (res) => {
                    console.log(res);
                },
                error: (error) => {
                    console.error('Error:', error);
                }
            }
        )
    }

    showCloudDetails(cloudVendor: any) {
        this.selectedCloudVendor = cloudVendor;
        this.isSelected = true;
    }

    openModal(cloudVendor?: CloudModels) {
        const modalRef = this.modalService.open(AddCloudVendorComponent);

        // Pass the cloudVendor to the modal component for editing
        modalRef.componentInstance.cloudVendor = cloudVendor;

        modalRef.result.then(
            (result) => {
                // Handle the close result here
                console.log(`Modal closed with: ${result}`);
            },
            (reason) => {
                // Handle the dismissal reason here
                console.log(`Modal dismissed with reason: ${reason}`);
                if (reason) {
                    this.getCloudList();
                }
            }
        );
    }

    deleteCloud(id: string) {
        this.cloudService.deleteCloud(id).subscribe({
            next: (res) => {
                alert('Deleted Successfully!!');
                this.getCloudList();
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

}
