import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CloudService} from "../../services/cloud.service";
import {CloudModels} from "../models/cloud-models";

@Component({
    selector: 'app-add-cloud-vendor-dialog',
    templateUrl: './add-cloud-vendor.component.html',
    styleUrls: ['./add-cloud-vendor.component.scss']
})
export class AddCloudVendorComponent implements OnInit {
    cloudForm: FormGroup = new FormGroup({});
    closeResult: String = '';
    newCloud: CloudModels = new CloudModels();
    @Input() cloudVendor: CloudModels | undefined;
    updatedForm: CloudModels = new CloudModels();

    constructor(private modalService: NgbModal, private cloudFormFB: FormBuilder, private cloudService: CloudService) {
    }

    ngOnInit(): void {
        this.initCloudForm();
        console.log(this.cloudVendor);
        if (this.cloudVendor) {
            this.cloudForm.patchValue(this.cloudVendor);
            console.log(this.cloudForm.value)
        }
    }

    initCloudForm() {
        this.cloudForm = this.cloudFormFB.group({
            vendorId: new FormControl(null),
            vendorAddress: new FormControl(null),
            vendorName: new FormControl(null),
            vendorPhoneNumber: new FormControl(null),
        })
    }

    addCloud() {
        // console.log(this.cloudForm.value);
        this.newCloud = this.cloudForm.value;
        this.cloudService.createCloud(this.newCloud).subscribe({
            next: (res) => {
                alert('Cloud created successfully!!');
                this.closeModal(true);
            },
            error: (error) => { // Fixed the typo here (changed 'next' to 'error')
                console.log(error);
            }
        });
    }

    editUser() {
        this.updatedForm = this.cloudForm.value;
        console.log(this.updatedForm);

        this.cloudService.editCloud(this.updatedForm).subscribe({
            next: (res) => {
                alert('Updated Successfully!!')
                this.closeModal(true);
            },
            error: (error) => {
                console.log(error);
            }
        });
    }


    open(content: any) {
        console.log(content)
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    closeModal(reason: boolean) {
        this.modalService.dismissAll(reason);
    }


    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


}
