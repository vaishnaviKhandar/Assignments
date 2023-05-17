import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeStructuredJsonComponent } from './tree-structured-json/tree-structured-json.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'tree-structured-json',
    component:TreeStructuredJsonComponent
  },
  {
    path:'dynamic-dropdown',
    component:FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
