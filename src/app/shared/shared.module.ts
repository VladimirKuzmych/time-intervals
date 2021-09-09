import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [...sharedComponents],
    imports: [
        CommonModule,
    ],
    exports: [...sharedComponents, CommonModule, FormsModule, MatSelectModule, MatFormFieldModule],
})
export class SharedModule {
}
