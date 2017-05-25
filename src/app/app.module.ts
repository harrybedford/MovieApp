import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Params } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdListModule, MdInputModule, MdCardModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { Search } from '../components/search/search';
import { Detail } from '../components/detail/detail';

//Services
import { DataService } from '../services/data';

//Routes
const ROUTES: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: Search },
    { path: 'detail/:id', component: Detail },
    { path: '**', redirectTo: 'search' }
]

@NgModule({
    declarations: [
        AppComponent,
        Search,
        Detail
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES),
        BrowserAnimationsModule,
        MdInputModule,
        MdButtonModule,
        MdListModule,
        MdCardModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
