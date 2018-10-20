import { ErrorHandler } from "@angular/core";

export class ApplicationErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    alert('ERROR: An unexpected error occurred.');
    console.log(error);
  }

}