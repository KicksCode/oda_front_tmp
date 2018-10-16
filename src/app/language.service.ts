export class LanguageService {
 
    languageSelected : String = navigator.language; 
    
    getNameTest(): String{
        return this.languageSelected; 
    }

    //language selector = en-US

}