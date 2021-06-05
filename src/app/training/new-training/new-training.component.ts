import { Component, OnInit } from '@angular/core';
import { trainingservice } from '../training.service';
import { exercise } from '../exercise.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  
  exercises : exercise[]=[];

  constructor(private trainingservice: trainingservice)
  {


  }

  ngOnInit() {
    this.exercises=this.trainingservice.getavailableexercise(); 
  }

  onStartTraining(form: NgForm) {
  this.trainingservice.startexercise(form.value.exercise);
  }

}
