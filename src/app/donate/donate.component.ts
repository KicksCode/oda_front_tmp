import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers : [LanguageService]
})
export class DonateComponent implements OnInit {

  language: String;

  title: String; 
  desc : String; 
  desc2 : String; 

  buttonDonate : String;
  buttonVolunteer : String; 
  buttonShare : String;

  modalTitleDonate : String;
  modalTitleVolunteer : String;
  modalTitleShare : String;
  mdalMsgDonate : String; 
  mdalMsgVolunteer : String; 
  mdalMsgShare: String; 

  constructor(private languageSelectedService: LanguageService) {
    this.setUpDonateCaptions(); 
   }

  ngOnInit() {
  }

  setUpDonateCaptions(){
    this.language = this.languageSelectedService.getNameTest();

    if (this.language.includes('es')) {
      this.title = "Donar"; 
      this.desc = "";
      this.desc2 = "¡Otros Dreams en Acción sigue creciendo y hay muchas maneras para involucrarse y apoyar a esta labor y nuestra comunidad!";
      this.buttonDonate = "Donar Ahora";
      this.buttonVolunteer = "Servicio Social"; 
      this.buttonShare = "Compartir";
      this.modalTitleDonate = "Donar en PayPal"
      this.modalTitleVolunteer = "Mandanos un email"
      this.modalTitleShare ="¡Corre la voz!"
      this.mdalMsgDonate = "¡Asegurarse de elegir el cambio correcto: MXN o USD!"; 
      this.mdalMsgVolunteer = "Escríbenos a info@odamexico.org y responderemos lo más pronto posible."; 
      this.mdalMsgShare= "Visitanos en Facebook"; 
    }
    else{
      this.title = "Donate"; 
      this.desc = "Want to get involved?"; 
      this.desc2 = "ODA continues to grow and there are a lot of ways to get involved to support this work and our community!";   
      this.buttonDonate = "Donate Now ";
      this.buttonVolunteer = "Volunteers"; 
      this.buttonShare = "Share"; 
      this.modalTitleDonate = "Donate at PayPal"
      this.modalTitleVolunteer = "Send us an email"
      this.modalTitleShare ="Spread the word!"
      this.mdalMsgDonate = "Be sure to select the correct currency: MXN or USD!"; 
      this.mdalMsgVolunteer = "Get in touch at info@odamexico.org and we will respond as soon as possible."; 
      this.mdalMsgShare= ""; 
    }
  
  } 
}
