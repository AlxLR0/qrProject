import { Component } from '@angular/core';
import { SafeUrl, SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QR Project ';
  qrdata = 'hola mundo';
  qrCodeDownloadLink: SafeUrl ='';

  onChange(url: SafeUrl){
    this.qrCodeDownloadLink = url;
  }
}
