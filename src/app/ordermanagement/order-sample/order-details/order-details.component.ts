// AUTHOR : Sindhuja
// PAGE DESCRIPTION : This page contains functions of Order Details for sample type order.
import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderSampleService } from '../order-sample.service';

@Component({
  selector: 'sewn-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @ViewChild ( "fileUpload")  fileUpload;
  files: FileList;
  uploadShow: boolean = true;
  receiptShow: boolean = false;
  constructor(public sampleService: OrderSampleService) { }

  ngOnInit(): void {
  }
fileClick(){
  
  this.fileUpload.nativeElement.click();
}
  // Function Name : Upload receipt
  // Description: This function helps to upload receipt in order details tab of order sample.
  openFile(event) {
    this.files = event.target.files;
    this.uploadShow = false;
    this.receiptShow = true;
  }

  uploadReceipt(){
    this.uploadShow = false;
    this.receiptShow = true;
}
}
