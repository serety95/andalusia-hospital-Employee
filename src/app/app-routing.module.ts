import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'search',component:SearchEmployeeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top',
  }),
  TranslateModule,

],
  exports: [RouterModule,TranslateModule]
})
export class AppRoutingModule { }
