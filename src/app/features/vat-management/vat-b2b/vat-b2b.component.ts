import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VatserviceService } from '../vatservice.service';
import { RoasteryProfileService } from '../../roastery-profile/roastery-profile.service';
@Component({
  selector: 'app-vat-b2b',
  templateUrl: './vat-b2b.component.html',
  styleUrls: ['./vat-b2b.component.css']
})
export class VatB2bComponent implements OnInit {

  constructor(private router : Router, 
    private toastrService: ToastrService,
    public vatService:VatserviceService,
    public roasteryProfileService : RoasteryProfileService,) { }

 
  ngOnInit(): void {
  
    /*Onboarding start*/
    $('body').on('click', '.add-partner', function () {

      var NewRow = `<div class="new-row position-relative">
      <div class="row">
      
      <div class="col-12 col-md-4 Onboard-input">
          <label class="w-100">Country *</label>
          <select  name="Year" class="form-control select-region">
              <option  value="" selected="" disabled=""> Select a Country</option>
              <option  value="Sweden"> Sweden </option>
              <option  value="Australia"> Australia </option>
              <option  value="India"> India </option>
          </select>
      </div>
			
      <div class="col-12 col-md-4 Onboard-input">
        <label class="w-100">Transaction type *</label>
        <input class="w-100" type="text" placeholder="Please enter your type">
      </div>

      <div class="col-12 col-md-4 Onboard-input">
        <label class="w-100">Vat percentage *</label>
        <input class="w-100" type="number" placeholder="Enter percentage">
      </div>

        <span class="delete-rows fnt-muli fnt-700 txt-clr60b delete-b2b">
				Delete row
			</span>
			</div>
		
		</div>`
      $(this).parents('.Onboard-vatb').find('.Onboard-vatb__inputs:last').append(NewRow);
    });

    $('body').on('click', '.delete-rows', function () {


      $(this).parents('.new-row').remove();
    });
    /*Onboarding end */
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
}
