import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalsService } from 'src/services/globals.service';
import { RoasterserviceService } from 'src/services/roasters/roasterservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserserviceService } from 'src/services/users/userservice.service';
import { RoasteryProfileService } from '../../roastery-profile/roastery-profile.service';


@Injectable({
	providedIn: 'root'
})
export class CuppingReportService {
	roaster_id: any;
	reportsList: any;
	serviceReportDetails: any
	externalReportsList: any;
	otherReportDetails: any;

	constructor(private userService: UserserviceService, private roasterService: RoasterserviceService,
		private toasterService: ToastrService, private router: Router,
		public globals: GlobalsService, private cookieService: CookieService, private roasteryProfileService: RoasteryProfileService) {
		this.roaster_id = this.cookieService.get('roaster_id');

	}
	getCuppingReports() {
		this.userService.listCuppingReports(this.roaster_id).subscribe(
			res => {
				if (res['success'] == true) {
					this.reportsList = res['result'];
				}
				else {
					this.toasterService.error("Error while listing Cupping Reports.")
				}
			}
		)
	}

	getCountryName(data: any) {
		return this.roasteryProfileService.countryList.find(con => con.isoCode == data).name;
	}

	getExternalCuppingReports() {
		this.roasterService.externalCuppingReportsList(this.roaster_id).subscribe(
			res => {
				if (res['success'] == true) {
					this.externalReportsList = res['result'];
				}
				else {
					this.externalReportsList = [];
					this.toasterService.error("Error while listing Other Reports.");
				}
			}
		)
	}
}
