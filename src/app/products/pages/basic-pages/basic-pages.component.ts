import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css']
})
export class BasicPagesComponent {
  public nameLower: string =' britany';
  public nameUper: string =' torrico';
  public fullName: string ='BritaNy TOrriCO';
  public customDate: Date = new Date();
}
