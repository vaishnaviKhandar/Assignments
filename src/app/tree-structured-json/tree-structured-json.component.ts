import { Component } from '@angular/core';
import{FormDataService} from '../form-data.service'
@Component({
  selector: 'app-tree-structured-json',
  templateUrl: './tree-structured-json.component.html',
  styleUrls: ['./tree-structured-json.component.scss']
})
export class TreeStructuredJsonComponent {
  tree: any;
  constructor(public formDataService:FormDataService){}
  ngOnInit() {
    this.formDataService.data.subscribe(data=>{
    this.tree=JSON.parse(data);
    })
  }
}
