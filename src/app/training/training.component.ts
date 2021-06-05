import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { trainingservice } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;
  exercisesubscription: Subscription;

  constructor(private trainingservice : trainingservice) { }

  ngOnInit() {
    this.exercisesubscription=this.trainingservice.exercisechanged.subscribe(exercise =>
      {
        if(exercise) {
        this.ongoingTraining=true;
        }
        else
        {
          this.ongoingTraining=false;
        }
      })
  }

}
