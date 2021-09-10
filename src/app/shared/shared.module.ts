import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { sharedComponents } from './components';
import { sharedPipes } from './pipes';


@NgModule({
    declarations: [...sharedComponents, ...sharedPipes],
    imports: [
        CommonModule,
        MatTableModule,
    ],
    exports: [
        ...sharedComponents,
        ...sharedPipes,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTableModule,
    ],
})
export class SharedModule {
}
