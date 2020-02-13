import {ErrorHandler, Injectable} from '@angular/core';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://dd550edd56714fb29c8d5a27df260d0b@sentry.io/2482643'
});

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }

  constructor() { }
}
