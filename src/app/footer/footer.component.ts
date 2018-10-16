import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [LanguageService]
})
export class FooterComponent implements OnInit {

  language : String; 
  title : String; 

  constructor(private languageSelectedService : LanguageService) { 
    this.setUpLanguageText(); 
  }


  ngOnInit() {
  }

  setUpLanguageText(){
    this.language = this.languageSelectedService.getNameTest(); 

    if(this.language.includes('es')){
      this.title = "Todos los derechos reservados Otros Dreams en Acción"; 
    }
    else{
      this.title = "All rights reserved Otros Dreams en Acción"; 
    }

  }

}
