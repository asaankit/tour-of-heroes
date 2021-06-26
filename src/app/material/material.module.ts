import { NgModule } from '@angular/core';

import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { MatCardModule} from "@angular/material/card";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule} from "@angular/material/icon";

import { MatInputModule} from "@angular/material/input";
import { MatFormFieldModule} from "@angular/material/form-field";










const MaterialComponents=[
  MatButtonModule
]



@NgModule({

  imports: [MaterialComponents,MatCardModule,MatFormFieldModule,MatInputModule,MatSidenavModule,MatListModule,MatToolbarModule,MatIconModule],
  exports: [MaterialComponents,MatCardModule,MatFormFieldModule,MatInputModule,MatSidenavModule,MatListModule,MatToolbarModule,MatIconModule]
})
export class MaterialModule { }
