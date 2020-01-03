import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor(){}

/*  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      })
    })
   }*/
  
  addTopic(topicadding : HTMLInputElement){
      this.getTopics.push(new FormControl(topicadding.value));
      topicadding.value="";
  }

  removeTopic(item){
    let index = this.getTopics.controls.indexOf(item);
    this.getTopics.removeAt(index);
  }
  
  public get getTopics() {
    return this.form.get('topics') as FormArray; 
  }   
}
