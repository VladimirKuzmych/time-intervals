import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent],
})
export class AppModule {
}
