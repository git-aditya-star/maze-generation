import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MazeComponent } from './maze/maze.component';




@NgModule({
  declarations: [
    AppComponent,
    MazeComponent,
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'maze', pathMatch: 'full' },
      { path: 'maze', component: MazeComponent },
      
      { path: '**', redirectTo: '' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
