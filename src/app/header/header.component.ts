import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { HeaderModel } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], 
  providers: [LanguageService]
})
export class HeaderComponent implements OnInit {

  headerModelObj : HeaderModel; 
  language : String; 

  constructor(private languageSelectedService : LanguageService) { 
    this.setUpMenuLanguage(); 
  }

  ngOnInit() {
  }

  public setUpMenuLanguage (){
 
    this.language = this.languageSelectedService.getNameTest(); 

    if(this.language.includes('es')){
      this.headerModelObj = new HeaderModel("SOBRE", "POCH@ HOUSE", "COMUNIDAD", "MEDIOS", "DONAR", 'CONTACTAR', "ALIADOS"); 
    }
    else{
      this.headerModelObj = new HeaderModel("ABOUT", "POCH@ HOUSE", "COMMUNITY", "NEWS", "DONATE", 'CONTACT', 'ALLIES'); 
    } 
  }


}
