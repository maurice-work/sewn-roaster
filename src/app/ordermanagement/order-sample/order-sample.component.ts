import { ServiceChatTypes } from '../../../models/order-chat';
// AUTHOR : Sindhuja
// PAGE DESCRIPTION : This page contains functions of Order Sample.
import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { OrderSampleService } from './order-sample.service';
import { ActivatedRoute } from '@angular/router';
import { GradeInfoComponent } from '../order-sample/grade-info/grade-info.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { OrderDetailsComponent } from '../order-sample/order-details/order-details.component';
import { GlobalsService } from 'src/services/globals.service';
import { RoasteryProfileService } from 'src/app/features/roastery-profile/roastery-profile.service';
import { OrderBookedService } from '../order-booked/order-booked.service';
import { RoasterserviceService } from 'src/services/roasters/roasterservice.service';
import { UserserviceService } from 'src/services/users/userservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-order-sample',
    templateUrl: './order-sample.component.html',
    styleUrls: ['./order-sample.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class OrderSampleComponent implements OnInit {
    @ViewChild('orderPlacedSample', { static: false }) private orderPlacedSample: ElementRef<HTMLElement>;
    @ViewChild('orderConfirmedSample', { static: false }) private orderConfirmedSample: ElementRef<HTMLElement>;
    @ViewChild('paymentSample', { static: false }) private payment: ElementRef<HTMLElement>;
    @ViewChild('shippmentSample', { static: false }) private shippmentSample: ElementRef<HTMLElement>;
    @ViewChild('receivedSample', { static: false }) private receivedSample: ElementRef<HTMLElement>;
    @ViewChild('gradedSample', { static: false }) private gradedSample: ElementRef<HTMLElement>;
    @ViewChild(GradeInfoComponent, { static: false }) public gradeInfoTab: GradeInfoComponent;
    @ViewChild('myForm') myForm;
    sampleValueToShow: string = 'Order Placed';
    orderSampleTimeline: boolean = true;
    confirmShow: boolean = false;
    confirmReport: boolean = false;
    shippmentReport: boolean = false;
    receivedReport: boolean = false;
    gradedReportSample: boolean = false;
    uploadReportSample: boolean = true;
    paymentReceipt: boolean = false;

    dataFromTable: any;
    greenIconShow: boolean = false;

    cancelShow: boolean = false;
    totalstar = 5;
    newvalue: any = 2;
    appLanguage?: any;
    orderSampleActive: any = 0;
    recievedShow: boolean = false;
    shippmentShow: boolean = false;
    orderSampleId: any;
    countryValue: any;
    roasterId: string;

    SERVICE_TYPE = ServiceChatTypes.RO_ES;

    constructor(
        public sampleService: OrderSampleService,
        private route: ActivatedRoute,
        public router: Router,
        public cookieService: CookieService,
        public bookedService: OrderBookedService,
        public globals: GlobalsService,
        public profileservice: RoasteryProfileService,
        private roasterService: RoasterserviceService,
        private userService: UserserviceService,
        private toastrService: ToastrService,
    ) {
        this.dataFromTable = decodeURIComponent(this.route.snapshot.queryParams['data']);
        this.orderSampleId = decodeURIComponent(this.route.snapshot.queryParams['id']);
        this.sampleService.orderSampleId = this.orderSampleId;
        this.sampleService.viewSampleOrderDetails();
        this.roasterId = this.cookieService.get('roaster_id');

        if (this.sampleService.paymentVerification == true && this.dataFromTable == 'CONFIRMED') {
            setTimeout(() => {
                this.sampleValueToShow = 'Payment';
                this.paySample();
            }, 1000);
        }
    }

    ngOnInit(): void {
        //Auth checking
        if (this.cookieService.get('Auth') == '') {
            this.router.navigate(['/auth/login']);
        }
        this.language();
        //Fills the time line based on the status selected in estate order.
        console.log('the data from table trigger is  : ' + this.dataFromTable);
        if (this.dataFromTable == 'CONFIRMED') {
            this.sampleValueToShow = 'Order Confirmed';
            setTimeout(() => {
                this.orderConfirmSample();
            }, 500);
        } else if (this.dataFromTable == 'PAYMENT') {
            this.sampleValueToShow = 'Payment';
            setTimeout(() => {
                this.paySample();
            }, 500);
        } else if (this.dataFromTable == 'SHIPPED') {
            this.sampleValueToShow = 'Shipped';
            setTimeout(() => {
                this.shipmentStatusSample();
            }, 500);
        } else if (this.dataFromTable == 'RECEIVED') {
            this.sampleValueToShow = 'Received';
            setTimeout(() => {
                this.receivedStatusSample();
            }, 500);
        } else if (this.dataFromTable == 'GRADED') {
            this.sampleValueToShow = 'Graded';
            setTimeout(() => {
                this.gradedStatusSample();
            }, 500);
        }
    }

    // Function Name : Order Placed
    // Description: This function fills order placed timeline .
    orderPlaceSample() {
        this.sampleValueToShow = this.orderPlacedSample.nativeElement.innerHTML;
    }
    // Function Name : Order Confirmed
    // Description: This function fills order Confirmed timeline and payment status is pending.
    orderConfirmSample() {
        this.sampleValueToShow = this.orderConfirmedSample.nativeElement.innerHTML;
        this.orderConfirmedSample.nativeElement.style.color = '#232334';
        this.orderConfirmedSample.nativeElement.style.fontWeight = 'bold';
        const completedProcess = document.getElementById('confirmDivSample');
        completedProcess.classList.remove('completed');
        this.confirmReport = true;
    }
    // Function Name :Payment
    // Description: This function fills order Payment timeline and payment status will change to paid.
    paySample() {
        this.orderConfirmSample();
        this.sampleValueToShow = this.payment.nativeElement.innerHTML;
        this.payment.nativeElement.style.color = '#232334';
        this.payment.nativeElement.style.fontWeight = 'bold';
        const completedProcess = document.getElementById('paymentDivSample');
        completedProcess.classList.remove('completed');
        this.paymentReceipt = true;
        this.sampleService.paymentStatus();
    }
    // Function Name : Order Sample Shippment
    // Description: This function shows Tracking Id and Shippment Id in order details tab once shippment is done.
    shipmentStatusSample() {
        this.paySample();
        this.sampleValueToShow = this.shippmentSample.nativeElement.innerHTML;
        this.shippmentSample.nativeElement.style.color = '#232334';
        this.shippmentSample.nativeElement.style.fontWeight = 'bold';
        const completedProcess = document.getElementById('shippmentDivSample');
        completedProcess.classList.remove('completed');
        this.shippmentReport = true;
        this.sampleService.shipmentDone = true;
        if (this.dataFromTable == 'SHIPPED') {
            setTimeout(() => {
                this.orderSampleTimeline = false;
                this.confirmShow = true;
            }, 2000);
        }
        // Calling the Order Details component by creating object of the component and accessing its methods

        let uploadReceipt = new OrderDetailsComponent(
            this.sampleService,
            this.globals,
            this.profileservice,
            this.cookieService,
            this.roasterService,
            this.userService,
            this.toastrService,
        );
        setTimeout(() => {
            uploadReceipt.uploadReceipt();
        }, 500);
    }
    // Function Name : Order Sample Received
    // Description: This function fills timeline of order received.
    receivedStatusSample() {
        this.shipmentStatusSample();
        this.sampleValueToShow = this.receivedSample.nativeElement.innerHTML;
        this.receivedSample.nativeElement.style.color = '#232334';
        this.receivedSample.nativeElement.style.fontWeight = 'bold';
        const completedProcess = document.getElementById('receivedDivSample');
        completedProcess.classList.remove('completed');
        this.receivedReport = true;
        this.orderSampleTimeline = true;
        if (this.dataFromTable == 'RECEIVED') {
            setTimeout(() => {
                this.orderSampleTimeline = false;
                this.confirmShow = true;
            }, 2000);
        }
    }
    // Function Name : Order Booked Graded
    // Description: This function shows order is graded and grade info tab timeline is filled.
    gradedStatusSample() {
        this.receivedStatusSample();
        this.sampleValueToShow = this.gradedSample.nativeElement.innerHTML;
        this.gradedSample.nativeElement.style.color = '#232334';
        this.gradedSample.nativeElement.style.fontWeight = 'bold';
        const completedProcess = document.getElementById('gradedDivSample');
        completedProcess.classList.remove('completed');
        this.uploadReportSample = false;
        this.gradedReportSample = true;
        $('#pills-contact-tab')[0].click();
        setTimeout(() => {
            this.orderSampleTimeline = false;
            // this.confirmShow = true;
        }, 2000);

        // Calling the Grade info component by creating object of the component and accessing its methods

        //let callGradeInfo = new GradeInfoComponent(this.sampleService,this.globals);
        this.gradeInfoTab.gradeComplete();
    }

    // Function Name : Order Sample Cancel Button
    // Description: This function helps to cancel the order.
    cancelOrder() {
        this.orderSampleTimeline = false;
        this.confirmShow = false;
        this.recievedShow = false;
        this.shippmentShow = false;
        this.cancelShow = true;
    }
    receivedDate() {
        this.roasterService.orderReceived(this.roasterId, this.orderSampleId).subscribe((response) => {
            if (response['success'] == true) {
                this.toastrService.success('Order received has been confirmed');
                this.orderSampleTimeline = false;
                this.cancelShow = false;
                this.shippmentShow = false;
                this.recievedShow = true;
                this.confirmShow = false;
                setTimeout(() => {
                    this.receivedStatusSample();
                }, 2000);
            } else {
                this.toastrService.error('Error while confirmation the Shipment');
            }
        });
        // this.orderSampleTimeline = false;
        // this.confirmShow = false;
        // this.cancelShow = false;
        // this.shippmentShow =false;
        // this.recievedShow=true;
    }
    wrongShippment() {
        this.orderSampleTimeline = false;
        this.confirmShow = false;
        this.cancelShow = false;
        this.recievedShow = false;
        this.shippmentShow = true;
    }
    language() {
        this.appLanguage = this.globals.languageJson;
        this.orderSampleActive++;
    }

    //Click on cancel button scrolls to cancel div
    ngAfterViewInit() {
        $('.cancel-order-btn').click(function () {
            $('html,body').animate(
                {
                    scrollTop: $('.cancel-predisplay').offset().top,
                },
                500,
            );
        });

        //chat
        const chatbox = document.querySelector('.js-chatbox');
        const chatboxMsgDisplay = document.querySelector('.js-chatbox-display');
        const chatboxForm = document.querySelector('.js-chatbox-form');

        // Use to create chat bubble when user submits text
        // Appends to display
        const createChatBubble = (input) => {
            const chatSection = document.createElement('p');
            chatSection.textContent = input;
            chatSection.classList.add('chatbox__display-chat');

            chatboxMsgDisplay.appendChild(chatSection);
        };

        // Toggle the visibility of the chatbox element when clicked
        // And change the icon depending on visibility

        // Form input using method createChatBubble
        // To append any user message to display
    }
    // onRate($event:{ newValue:number}) {

    //   this.newvalue=$event.newValue;
    //  console.log(this.newvalue);
    // }
    GetCountry(data: any) {
        // console.log(data.toUpperCase());
        if (data) {
            this.countryValue = this.profileservice.countryList.find((con) => con.isoCode == data.toUpperCase());
            if (this.countryValue) {
                return this.countryValue.name;
            }
        }
    }
    showInvoice() {
        const a = document.createElement('a');
        a.href = this.sampleService.invoice_url;
        a.download = `#${this.sampleService.orderSampleId}`;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    onClickGradeInfoTab() {
        this.gradeInfoTab.getHarvestDetails();
    }
}
