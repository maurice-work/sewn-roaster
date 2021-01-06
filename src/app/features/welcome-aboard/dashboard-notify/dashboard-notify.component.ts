import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalsService } from 'src/services/globals.service';

@Component({
  selector: 'app-dashboard-notify',
  templateUrl: './dashboard-notify.component.html',
  styleUrls: ['./dashboard-notify.component.scss'],
})
export class DashboardNotifyComponent implements OnInit {
  appLanguage?: any;
  welcomeActive: any = 0;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    public globals: GlobalsService
  ) {}

  ngOnInit(): void {
    // Auth checking
    if (this.cookieService.get('Auth') === '') {
      this.router.navigate(['/auth/login']);
    }

    $('.nav-links__item').removeClass('active');
    $('.nav-links__item').eq(0).addClass('active');
    this.language();
  }

  language() {
    this.appLanguage = this.globals.languageJson;
    this.welcomeActive++;
  }
}
