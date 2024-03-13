import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MaterialComponents = [ MatCheckboxModule

];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents],
})

export class MaterialModule { }
