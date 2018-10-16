export class HeaderModel{

     aboutUs: String; 
     pochaHouse: String; 
     community: String; 
     inTheNews: String; 
     donate: String; 
     contactUs: String; 
     allies : String; 

    constructor(aboutUs: String, pochaHouse: String, community: String, inTheNews: String, donate: String, contactUs: String, allies: String) {
        this.aboutUs = aboutUs; 
        this.pochaHouse = pochaHouse; 
        this.community = community; 
        this.inTheNews = inTheNews; 
        this.donate = donate; 
        this.contactUs = contactUs
        this.allies = allies; 
    }

}