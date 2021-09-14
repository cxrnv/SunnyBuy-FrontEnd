import { HelpPageComponent } from './help-page.component';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HelpPageComponent
    ],
    imports: [
        HomeModule
    ],
    exports:
        [
            HelpPageComponent
        ]
})
export class HelpModule { }