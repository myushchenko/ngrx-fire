import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
	exports: [
		CommonModule,
		MatInputModule,
		MatDialogModule,
		MatButtonModule
	],
	declarations: []
})
export class MaterialModule { }
