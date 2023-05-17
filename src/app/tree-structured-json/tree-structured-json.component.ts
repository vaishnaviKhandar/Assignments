import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-structured-json',
  templateUrl: './tree-structured-json.component.html',
  styleUrls: ['./tree-structured-json.component.scss']
})
export class TreeStructuredJsonComponent {
  tree: any;

  ngOnInit() {
    let firstLevelArr = [ 
      { id: "1", name: "India" }, 
      { id: "2", name: "Germany" } 
      ]; 
      let secondLevelArr = [ 
      { id: "s1", parentId: "2", name: "Bavaria" }, 
      { id: "s2", parentId: "2", name: "Berlin" }, 
      { id: "s3", parentId: "1", name: "Maharashtra" }, 
      { id: "s4", parentId: "1", name: "Tamilnadu" } 
      ]; 
      let thirdLevelArr = [ 
      { id: "d1", parentId: "s1", name: "Upper Bavaria" }, 
      { id: "d2", parentId: "s1", name: "Lower Bavaria" }, 
      { id: "d3", parentId: "s2", name: "Berlin-Mitte" }, 
      { id: "d4", parentId: "s2", name: "Kreuzberg" }, 
      { id: "d5", parentId: "s3", name: "Nashik" }, 
      { id: "d6", parentId: "s3", name: "Jalgoan" }, 
      { id: "d7", parentId: "s4", name: "Ariyalur" }, 
      { id: "d8", parentId: "s4", name: "Chennai" } 
      ]; 
      let fourthLevelArr = [ 
      { id: "p1", parentId: "d1", name: "Munich" }, 
      { id: "p2", parentId: "d1", name: "Erding" }, 
      { id: "p3", parentId: "d2", name: "Leipzig" }, 
      { id: "p4", parentId: "d2", name: "Landshut" }, 
      { id: "p5", parentId: "d3", name: "Passau" }, 
      { id: "p6", parentId: "d3", name: "Gesundbrunnen" }, 
      { id: "p7", parentId: "d4", name: "Frieburg" }, 
      { id: "p8", parentId: "d4", name: "Hamburg" }, 
      { id: "p9", parentId: "d6", name: "Raver" }, 
      { id: "p10", parentId: "d6", name: "Savda" },
      { id: "p11", parentId: "d5", name: "Ozar" }, 
      { id: "p12", parentId: "d5", name: "Manmad" }, 
      { id: "p13", parentId: "d7", name: "Thirumanur" }, 
      { id: "p14", parentId: "d7", name: "Sendurai" }, 
      { id: "p15", parentId: "d8", name: "New Chennai" }, 
      { id: "p16", parentId: "d8", name: "Old Chennai" } 
      ];
      
    this.tree = { countries: {} };
    
    // First level
    firstLevelArr.forEach((country) => {
      this.tree.countries[country.id] = {
        countryName: country.name,
        states: {},
      };
    });
    
    // Second level
    secondLevelArr.forEach((state) => {
      const country = this.tree.countries[state.parentId];
      if (country) {
        country.states[state.id] = {
          stateName: state.name,
          districts: {},
        };
      }
    });
    
    // Third level
    thirdLevelArr.forEach((district) => {
      const state = this.findState(district.parentId, this.tree);
      if (state) {
        state.districts[district.id] = {
          districtName: district.name,
          places: {},
        };
      }
    });
    
    // Fourth level
    fourthLevelArr.forEach((place) => {
      const district = this.findDistrict(place.parentId, this.tree);
      if (district) {
        district.places[place.id] = {
          placeName: place.name,
        };
      }
    });
    console.log("tree data",JSON.stringify(this.tree) );
   
  }
// Helper functions to find the parent nodes
findState(stateId: any, tree: any) {
  for (const countryId in tree.countries) {
  const country = tree.countries[countryId];
  for (const stateIdInCountry in country.states) {
  if (stateIdInCountry === stateId) {
  return country.states[stateId];
  }
  }
  }
  return null;
  }
  
  findDistrict(districtId: any, tree: any) {
  for (const countryId in tree.countries) {
  const country = tree.countries[countryId];
  for (const stateId in country.states) {
  const state = country.states[stateId];
  for (const districtIdInState in state.districts) {
  if (districtIdInState === districtId) {
  return state.districts[districtId];
  }
  }
  }
  }
  return null;
  }
}
