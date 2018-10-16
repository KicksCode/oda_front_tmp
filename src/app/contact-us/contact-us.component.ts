import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers : [LanguageService]
})
export class ContactUsComponent implements OnInit {
  language: String;

  title: String; 
  desc : String; 

  constructor(private languageSelectedService: LanguageService) {
    this.setUpContactUsTxt(); 
   }
  ngOnInit() {
  }

  setUpContactUsTxt(){
    this.language = this.languageSelectedService.getNameTest();

    if (this.language.includes('es')) {
      this.title = "Contactanos"; 
    }
    else{
      this.title = "Contact Us"; 
    }
  
  }

}
