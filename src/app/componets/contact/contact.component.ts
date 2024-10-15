import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Message} from '../../model/message.model';
import { ResponseService } from '../../services/response.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder, private responseService: ResponseService) {
    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      msg:['']
    })

  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.responseService.send(this.contactForm.value as Message).subscribe(
        (res)=>{
            console.log(res);
      })
      
    }
  }
}
