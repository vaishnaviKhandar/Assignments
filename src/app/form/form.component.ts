import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  isCountry: boolean = false;
  isState: boolean = false
  isCity:boolean=false

  selectedCountry: String = "Select Country Name";
  selectedState:String ="";
  Countries: Array<any> = [
    { name: 'India', states: [{ name: 'Maharashtra', cities: [{name:'Nashik',places:['Manmad','Ozar']},{name:'Jalgoan',places:['Dharangaon','Amalner']}] }, { name: 'Tamilnadu', cities: [{name:'Chennai',places:['Mahabalipuram','Kapaleeshwar Temple']},{name:'salem',places:['Shiva Temple','Siddhar Temple']}] }]},
    { name: 'Germany', states: [{ name: 'Bavaria', cities: [{name:'Ingolstadt',places:['Audi Museum','Audi Forum & Headquarters ']},{name: 'Regensburg',places:['Old Town',' Old Stone Bridge']}] }, { name: 'Hessen', cities: [{name:'Kassel',places:['Malana Village','Kheer Ganga']},{name: 'Fulda',places:['The Roman Forum','Main']}] }] },
  ];
  states: Array<any> = [];
  cities: Array<any> = [];
  places:Array<any>= [];

  changeCountry(country: any) {
    this.isCountry = true;
    this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states;
  }

  changeState(state: any) {
    this.isState = true
    this.selectedState = state.target.value
    this.cities = this.Countries.find((cntry: any) =>cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities;
  }
  changeCity(city: any) {
    this.isCity = true
    this.places = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == this.selectedState).cities.find((place: any) => place.name == city.target.value).places
  }


}
