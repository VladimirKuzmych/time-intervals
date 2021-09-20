import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { sharedComponents } from './components';
import { sharedPipes } from './pipes';
import { sharedDirectives } from './directives';


@NgModule({
    declarations: [...sharedComponents, ...sharedPipes, ...sharedDirectives],
    imports: [
        CommonModule,
    ],
    exports: [
        ...sharedComponents,
        ...sharedPipes,
        ...sharedDirectives,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
})
export class SharedModule {
}
