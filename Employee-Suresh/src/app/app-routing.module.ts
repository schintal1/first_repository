import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { ListEmpComponent } from './components/list-emp/list-emp.component';
import { EditEmpComponent } from './components/edit-emp/edit-emp.component';

const routes: Routes = [
  {path:"",component:ListEmpComponent},
  {path:"add-emp",component:AddEmpComponent},
  {path:"list-emp",component:ListEmpComponent},
  {path:"edit-emp",component:EditEmpComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

