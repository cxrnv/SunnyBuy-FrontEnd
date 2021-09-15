import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HelpPageComponent } from './help-page.component';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgChatModule } from 'ng-chat';

@NgModule({
    declarations: [
        HelpPageComponent,
        ChatComponent,
        DefaultComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        HomeModule,
        NgChatModule,
        CommonModule
    ],
    exports:
        [
            HelpPageComponent,
            DefaultComponent,
            ChatComponent
        ]
})
export class HelpModule { }