import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VatserviceService } from '../vatservice.service';
import { RoasteryProfileService } from '../../roastery-profile/roastery-profile.service';
import { UserserviceService } from 'src/services/users/userservice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vat-micro-roaster',
  templateUrl: './vat-micro-roaster.component.html',
  styleUrls: ['./vat-micro-roaster.component.css']
})
export class VatMicroRoasterComponent implements OnInit {
	country:any='';
	transaction_type:any;
	vat_percentage:any;
	mraddtranscation:boolean = false;
	mradd : boolean =true;
	addUser = 
		{
			country : '',
			transaction_type : '',
			vat_percentage: ''
		}
	
	roasterId: any;
	showpostdiv:boolean=true;
	resetButtonValue: string ='Add';

  constructor(private router : Router, 
	private toastrService: ToastrService,
	public cookieService : CookieService,
    public vatService:VatserviceService,
	public roasteryProfileService : RoasteryProfileService,
	public userService : UserserviceService
    ) { 
		this.roasterId = this.cookieService.get('roaster_id');

	}

  ngOnInit(): void {
	this.vatService.showadddatadiv = false;
    this.vatService.getVatDetails();
    /*Onboarding start*/
    // $('body').on('click', '.add-partner', function () {

    //   var NewRow = `<div class="new-row position-relative">
    //   <div class="row">
      
    //   <div class="col-12 col-md-4 Onboard-input">
    //       <label class="w-100">Country *</label>
    //       <select  name="Year" class="form-control select-region">
    //           <option  value="" selected="" disabled=""> Select a Country</option>
    //           <option  value="Sweden"> Sweden </option>
    //           <option  value="Australia"> Australia </option>
    //           <option  value="India"> India </option>
    //       </select>
    //   </div>
			
    //   <div class="col-12 col-md-4 Onboard-input">
    //     <label class="w-100">Transaction type *</label>
    //     <input class="w-100" type="text" placeholder="Please enter your type">
    //   </div>

    //   <div class="col-12 col-md-4 Onboard-input">
    //     <label class="w-100">Vat percentage *</label>
    //     <input class="w-100" type="number" placeholder="Enter percentage">
    //   </div>

    //     <span class="delete-rows fnt-muli fnt-700 txt-clr60b delete-b2b">
	// 			Delete row
	// 		</span>
	// 		</div>
		
	// 	</div>`
    //   $(this).parents('.Onboard-vatmr').find('.Onboard-vatmr__inputs:last').append(NewRow);
    // });

    // $('body').on('click', '.delete-rows', function () {


    //   $(this).parents('.new-row').remove();
    // });
    /*Onboarding end */
  }
  public addNewTranscation(){
	  this.showpostdiv=true;
    this.mradd=true;
    this.mraddtranscation=false;
	}
	private validateInput(data){
		let flag = true;
		// if (data && data.length){
		//   data.forEach( ele => {
			if (data.country === '' || data.transaction_type === '' || data.vat_percentage === '' ){
			  flag = false;
			}
		//   });
		// }
		return flag;
	}

  getCountryName(code : any){
	return this.roasteryProfileService.countryList.find(con => con.isoCode == code).name;	
}
  changeCountry() {
    // console.log("the selected country is : " + this.country);
    this.roasteryProfileService.changeCountry(this.roasteryProfileService.country);
  }
  onKeyPress(event: any) {
    if (event.target.value == "") {
      document.getElementById(event.target.id).style.border = "1px solid #D50000";
    } else {
      document.getElementById(event.target.id).style.border = "1px solid #d6d6d6";
    }
  }

	addVat(){
		let flag = true;
		var input = this.addUser;
	  	console.log(input);
		flag = this.validateInput(input);
		console.log("flag"+ flag);
		if (flag){
			this.resetButtonValue = "Adding";
			var body = {
			"country" : this.addUser.country,
			"transaction_type" : this.addUser.transaction_type,
			"vat_percentage" : this.addUser.vat_percentage,
			"vat_type": "mr"
			}
			this.userService.addVatDetails(this.roasterId,body).subscribe(
			result=>{
				if(result['success']==true){
					this.resetButtonValue = "Add"
					this.toastrService.success("Micro roaster VAT Details added successfully");
					this.vatService.getVatDetails();
					this.showpostdiv=false;
					this.mradd=false;
					this.mraddtranscation=true;
					this.addUser.country='';
					this.addUser.transaction_type='';
					this.addUser.vat_percentage='';
				}
				else{
					this.toastrService.error("Error while adding VAT details");
					this. resetButtonValue = "Add"
				}
			}
			)
		}
		else {
			this.resetButtonValue = "Add";
			this.toastrService.error('Fields should not be empty.');
		  }
	}
}
