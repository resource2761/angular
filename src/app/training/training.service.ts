import { exercise } from "./exercise.model";
import {Subject} from 'rxjs/Subject';

export class  trainingservice
{
  exercisechanged=new Subject<exercise>();

  private  availableexercise: exercise[]=[
{id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
{ id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
{ id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
{ id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
{ id: 'pushup', name: 'Push - up', duration: 120, calories: 10 },
];

private runningexercise : exercise;
private exercise: exercise[]=[];

getavailableexercise()
{
    // the slice method is used to real copy of exercise array
  return  this.availableexercise.slice();
}

startexercise(selectedid: string)
{
  // get the selected exercise and store in runningexercise
 this.runningexercise  = this.availableexercise.find(ex =>ex.id===selectedid);
 this.exercisechanged.next({...this.runningexercise});
  
}

completeexercise()
{
  this.exercise.push({
    ...this.runningexercise, 
    date: new Date(),
    state: 'completed'});

  this.runningexercise=null;
  this.exercisechanged.next(null);

}

cancelexercise(progress: number)
{
this.exercise.push({
    ...this.runningexercise, 
    duration: this.runningexercise.duration * (progress/100),
    calories: this.runningexercise.calories * (progress/100),
    date: new Date(),
    state: 'cancelled'});
    
  this.runningexercise=null;
  this.exercisechanged.next(null);

}

getrunningexercise()
{
  return {...this.runningexercise};
}


// for datatable
getcompletedorcancelledexercise()
{
  // to get a new copy of exercise
  return this.exercise.slice();

}


}

