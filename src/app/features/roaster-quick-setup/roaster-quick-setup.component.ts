import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RoasterserviceService } from 'src/services/roasters/roasterservice.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {GlobalsService} from 'src/services/globals.service';
import { UserserviceService } from 'src/services/users/userservice.service';

@Component({
  selector: 'app-roaster-quick-setup',
  templateUrl: './roaster-quick-setup.component.html',
  styleUrls: ['./roaster-quick-setup.component.css']
})
export class RoasterQuickSetupComponent implements OnInit {
  add_member_name:any;
  add_member_email:any;
  add_member_type: any = "";
  appLanguage?: any;
  roaster_id: any;
  inviteActive:any=0;
  headerValue: string;
  email: any;
  name: any;
  type: any;
  resetButtonValue : any = "Send Invites";

  constructor(public roasterService:RoasterserviceService,
    public cookieService: CookieService,
    private router: Router,  
    private toastrService : ToastrService,
    public route: ActivatedRoute, 
    public userService : UserserviceService, 
     private globals: GlobalsService) {
    this.roaster_id = this.cookieService.get('roaster_id');

   }

  ngOnInit(): void {
    if (this.cookieService.get("Auth") == "") {
      this.router.navigate(["/auth/login"]);
      }
      this.headerValue = decodeURIComponent(
        this.route.snapshot.queryParams["buttonValue"]
      );
      this.appLanguage = this.globals.languageJson;

      // this.language();
    }
    // language(){
    //   this.appLanguage = this.globals.languageJson;
    //   this.inviteActive++;
    // }
    sendInvite(){
      this.resetButtonValue = "Sending";
      console.log(this.add_member_email)
      if (this.headerValue == "Micro-Roaster") {
        this.userService.sendMicroRoasterInvite(this.roaster_id,this.add_member_email,this.add_member_name).subscribe(data=>{
          if(data['success']==true){
            // this.inviteSent = 1;
            console.log(data);
            console.log("https://qa-micro-roaster.sewnstaging.com/#/auth/setup?token="+data['result'].token);
            var body = {
              "name" : this.add_member_name,
              "portal" : this.headerValue,
              "content_type" : "invite_with_url",
              "senders" : [this.add_member_email],
              "url" : "https://qa-micro-roaster.sewnstaging.com/#/auth/setup?token="+data['result'].token
            };
            this.userService.sendUrlToEmail(body).subscribe(
              res => {
                if(res['status'] == "200 OK"){
                  this.resetButtonValue = "Send Invites";
                  this.toastrService.success("Email has been sent successfully");
                }
                else{
                  
                  this.resetButtonValue = "Send Invites";
                  this.toastrService.error("Error while sending email to the User");
                }
              }
            )
          }else{
            console.log(data);
            this.resetButtonValue = "Send Invites";
            this.toastrService.error("Error while sending email to the User");
          }
        })
      } else if (this.headerValue == "HoReCa") {
        this.userService.sendHorecaInvite(this.roaster_id,this.add_member_email,this.add_member_name,this.add_member_type).subscribe(data=>{
          if(data['success']==true){
            // this.inviteSent = 1;
            console.log(data);
            console.log("https://qa-client-horeca.sewnstaging.com/#/auth/horeca-setup?token="+data['result'].token);
            var body = {
              "name" : this.add_member_name,
              "portal" : this.headerValue,
              "content_type" : "invite_with_url",
              "senders" : [this.add_member_email],
              "url" : "https://qa-client-horeca.sewnstaging.com/#/auth/horeca-setup?token="+data['result'].token
            };
            this.userService.sendUrlToEmail(body).subscribe(
              res => {
                if(res['status'] == "200 OK"){
                  this.resetButtonValue = "Send Invites";
                  this.toastrService.success("Email has been sent successfully");
                }
                else{
                  
                  this.resetButtonValue = "Send Invites";
                  this.toastrService.error("Error while sending email to the User");
                }
              }
            )
          }else{
            console.log(data);
            this.resetButtonValue = "Send Invites";
            this.toastrService.error("Error while sending email to the User");
          }
        })
      } 
      // else if (this.headerValue == "Estate") {
      //   this.userService.sendEstateInvite(this.email).subscribe(data=>{
      //     if(data['success']==true){
      //       this.inviteSent = 1;
      //       console.log(data);
      //       console.log("https://qa-estates-portal.sewnstaging.com/#/auth/setup?token="+data['result'].token);
      //     }else{
      //       console.log(data);
      //     }
      //   })
      // }
    }

}
