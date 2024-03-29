// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    // apiURL: 'http://3.7.110.122:8000',
    apiURL: 'https://fed-api.sewnstaging.com',
    wsEndpoint: 'wss://messaging.sewnstaging.com/v1',
    encryptionKey: 'sewen_secrete_key',
    estatesWeb: 'https://estates.sewnstaging.com',
    facilitatorWeb: 'https://operator.sewnstaging.com',
    roasterWeb: 'https://roaster.sewnstaging.com/',
    microRoasterWeb: 'https://microroaster.sewnstaging.com',
    horecaWeb: 'https://partners.sewnstaging.com',
    agroUrl: 'https://api.agromonitoring.com/agro/1.0/',
    estateBrandProfileUrl: 'https://www.sewnstaging.com/estate',
    roasterBrandProfileUrl: 'https://www.sewnstaging.com/roaster',
    production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
