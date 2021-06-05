import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {exercise} from '../exercise.model';
import { trainingservice } from '../training.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {
  displayedcolumns=['date', 'name', 'duration', 'calories', 'state']
  datasource=new MatTableDataSource<exercise>();
  // for sort
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingservice: trainingservice) { 

  }

  ngOnInit() {
    this.datasource.data=this.trainingservice.getcompletedorcancelledexercise();

  }

  ngAfterViewInit(){
    this.datasource.sort = this.sort;

  }

  // for filter
  dofilter(filtervalue: string)
  {
    this.datasource.filter=filtervalue.trim().toLocaleLowerCase();
  }

}
