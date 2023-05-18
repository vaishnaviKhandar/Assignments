import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(public formDataService:FormDataService){}
  isCountry: boolean = false;
  isState: boolean = false;
  isCity: boolean = false;

  selectedCountry: String = 'Select Country Name';
  selectedState: String = '';
  country:any = [];
  states: Array<any> = [];
  cities: Array<any> = [];
  places: Array<any> = [];
  Countries:any
ngOnInit(){
  this.formDataService.data.subscribe(data=>{
    this.Countries=data  
    let temp = JSON.parse(this.Countries)?.countries
    this.country = Object.values(temp);  
  })  
}

  changeCountry(country: any) {
    this.isCountry = true;
    let temp1=this.country.find(
      (cntry: any) => cntry.countryName == country.target.value
    ).states
    this.states = Object.values(temp1)    
  }

  changeState(state1: any) {
    this.isState = true;
    this.selectedState = state1.target.value;
    let temp2=this.states.find((abc:any)=>abc.stateName==this.selectedState).districts
    this.cities=Object.values(temp2)    
  }
  changeCity(city: any) {
    this.isCity = true;
    let temp3=this.cities.find((pqr:any)=>pqr.districtName==city.target.value).places
    this.places=Object.values(temp3)
  }
}
