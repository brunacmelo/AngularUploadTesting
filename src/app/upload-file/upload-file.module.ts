import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input'; 
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    MatCardModule,
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    NgxMatFileInputModule,
    FormsModule, 
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class UploadFileModule { }
