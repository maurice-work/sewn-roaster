import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ChatNotificationComponent } from './chat-notification/chat-notification.component';
import { OnboardCustomersComponent } from './onboard-customers/onboard-customers.component';
import { AddProductComponent } from './e-commerce/add-product/add-product.component';
import { ProductsTableComponent } from './e-commerce/products-table/products-table.component';
import { FDirectMessagingComponent } from './f-direct-messaging/f-direct-messaging.component';
import { AgreementComponent } from './Farm Link/agreement/agreement.component';
import { BlogDetailsComponent } from './Farm Link/blog-details/blog-details.component';
import { CofeeExpeienceDetailsComponent } from './Farm Link/cofee-expeience-details/cofee-expeience-details.component';
import { CoffeeExperienceComponent } from './Farm Link/coffee-experience/coffee-experience.component';
import { QAForumComponent } from './Farm Link/q-a-forum/q-a-forum.component';
import { SocialMediaPostsComponent } from './Farm Link/social-media-posts/social-media-posts.component';
import { FeaturesComponent } from './features.component';
import { CuppingReportComponent } from './green-grading/cupping-report/cupping-report.component';
import { CuppingServiceComponent } from './green-grading/cupping-report/cupping-service/cupping-service.component';
import { GenerateNewReportComponent } from './green-grading/cupping-report/generate-new-report/generate-new-report.component';
import { CuppingResultsComponent } from './green-grading/cupping-results/cupping-results.component';
import { GenerateReportComponent } from './green-grading/generate-report/generate-report.component';
import { GradeSampleComponent } from './green-grading/grade-sample/grade-sample.component';
import { GradeServiceComponent } from './green-grading/grade-service/grade-service.component';
import { GreenCoffeeGradingComponent } from './green-grading/green-coffee-grading/green-coffee-grading.component';
import { GreenGradingComponent } from './green-grading/green-grading/green-grading.component';
import { ProcessDetailsComponent } from './green-grading/process-details/process-details.component';
import { ServiceRequestedComponent } from './green-grading/service-requested/service-requested.component';
import { ServiceRequestsComponent } from './green-grading/service-requests/service-requests.component';
import { SourceGradingComponent } from './green-grading/source-grading/source-grading.component';
import { HelpComponent } from './help/help.component';
import { LanguageRegionComponent } from './language-region/language-region.component';
import { LoginSecurityComponent } from './login-security/login-security.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NotificationComponent } from './notification/notification.component';
import { PrivacySettingsComponent } from './privacy-settings/privacy-settings.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RoasterCompleteSetupComponent } from './roaster-complete-setup/roaster-complete-setup.component';
import { RoasterOnboardComponent } from './roaster-onboard/roaster-onboard.component';
import { RoasterOnboardingComponent } from './roaster-onboarding/roaster-onboarding.component';
import { RoasterQuickSetupComponent } from './roaster-quick-setup/roaster-quick-setup.component';
import { RoasteryLicenseComponent } from './roastery-profile/roastery-license/roastery-license.component';

import { RoasteryProfileComponent } from './roastery-profile/roastery-profile.component';
import { AboutRoasteryComponent } from './roastery-profile/about-roastery/about-roastery.component';
import { VirtualTourComponent } from './roastery-profile/virtual-tour/virtual-tour.component';
import { ContactComponent } from './roastery-profile/contact/contact.component';
import { ReviewsComponent } from './roastery-profile/reviews/reviews.component';

import { SettingsComponent } from './settings/settings.component';
import { VatManagementComponent } from './vat-management/vat-management.component';
import { BatchSelectAnOrderComponent } from './batch-select-an-order/batch-select-an-order.component';
import { SuccessfulPageComponent } from './successful-page/successful-page.component';
import { DefaultSettingComponent } from './Farm Link/coffee-experience/default-setting/default-setting.component';
// tslint:disable-next-line: max-line-length
import { ApiRequestsTableComponent } from './api-requests/api-requests-table/api-requests-table.component';
import { ApiRequestDetailsComponent } from './api-requests/api-requests-table/api-request-details/api-request-details.component';
import { GenerateKeyDetailsComponent } from './api-requests/api-requests-table/generate-key-details/generate-key-details.component';
import { ConfirmPreorderLotComponent } from './confirm-preorder-lot/confirm-preorder-lot.component';
import { OtherCuppingServiceComponent } from './green-grading/cupping-report/other-cupping-service/other-cupping-service.component';
import { OtherGenerateReportComponent } from './green-grading/cupping-report/other-generate-report/other-generate-report.component';
import { ProductListComponent } from './e-commerce/product-list/product-list.component';
import { ProductDetailsComponent } from './e-commerce/product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
        children: [
            {
                path: 'onboard-customers',
                component: OnboardCustomersComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'roaster-onboarding',
                component: RoasterOnboardingComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'roaster-quick-setup',
                component: RoasterQuickSetupComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'roaster-complete-setup',
                component: RoasterCompleteSetupComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'myprofile',
                component: MyprofileComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'profile-edit',
                component: ProfileEditComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'account-settings',
                component: SettingsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'privacy-settings',
                component: PrivacySettingsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'login-security',
                component: LoginSecurityComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'preferences',
                component: ChatNotificationComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'language-region',
                component: LanguageRegionComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'help',
                component: HelpComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'f-direct-messaging',
                component: FDirectMessagingComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'coffee-experience',
                component: CoffeeExperienceComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'agreement',
                component: AgreementComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'social-media',
                component: SocialMediaPostsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'coffee-details',
                component: CofeeExpeienceDetailsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'blog-details',
                component: BlogDetailsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'roastery-profile',
                component: RoasteryProfileComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: 'about_roastery',
                        component: AboutRoasteryComponent,
                    },
                    {
                        path: 'virtual_tour',
                        component: VirtualTourComponent,
                    },
                    {
                        path: 'contact',
                        component: ContactComponent,
                    },
                    {
                        path: 'reviews',
                        component: ReviewsComponent,
                    },
                    { path: '', redirectTo: 'about_roastery', pathMatch: 'full' },
                ],
            },
            {
                path: 'notification',
                component: NotificationComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'license',
                component: RoasteryLicenseComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'roaster-onboard',
                component: RoasterOnboardComponent,
                canActivate: [AuthGuard],
            },

            {
                path: 'add-product',
                component: AddProductComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'product/:id',
                component: AddProductComponent,
                canActivate: [AuthGuard],
            },

            {
                path: 'products-list',
                component: ProductListComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'new-product',
                component: ProductDetailsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'new-product/:id',
                component: ProductDetailsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'cupping-reports',
                component: CuppingReportComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'cupping-service',
                component: CuppingServiceComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'generate-new-report',
                component: GenerateNewReportComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'cupping-results',
                component: CuppingResultsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'generate-report',
                component: GenerateReportComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'grade-sample',
                component: GradeSampleComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'grade-service',
                component: GradeServiceComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'service-request',
                component: ServiceRequestsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'green-coffee-grading',
                component: GreenCoffeeGradingComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'green-grading',
                component: GreenGradingComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'source-grading',
                component: SourceGradingComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'service-requested',
                component: ServiceRequestedComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'process-details',
                component: ProcessDetailsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'vat-management',
                component: VatManagementComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'q-a-forum',
                component: QAForumComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'batch-select-an-order',
                component: BatchSelectAnOrderComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'success-mail',
                component: SuccessfulPageComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'default-setting',
                component: DefaultSettingComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'api-requests-list',
                component: ApiRequestsTableComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'api-request-details',
                component: ApiRequestDetailsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'generate-key-details',
                component: GenerateKeyDetailsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'confirm-preorder-lot',
                component: ConfirmPreorderLotComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'other-cupping-service',
                component: OtherCuppingServiceComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'other-generate-report',
                component: OtherGenerateReportComponent,
                canActivate: [AuthGuard],
            },
            {
                path: '',
                redirectTo: 'roaster-dashboard',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
