import { Component, OnInit, Input } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';

@Component({
  selector: 'app-yoursubscriptionscard',
  templateUrl: './yoursubscriptionscard.component.html',
  styleUrls: ['./yoursubscriptionscard.component.css']
})
export class YoursubscriptionscardComponent implements OnInit {
@Input() plan: LearningPlan[];
items=[1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
