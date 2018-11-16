import { Component, OnInit } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-learning-plan',
  templateUrl: './learning-plan.component.html',
  styleUrls: ['./learning-plan.component.css']
})
export class LearningPlanComponent implements OnInit {
  plan: LearningPlan = {
    LearningPlanId: 1,
    Avatar: "../../assets/placeholder-team.jpg",
    DownVotes: 5,
    UpVotes: 96,
    Owner: "Jack",
    Summary: "C# learning plan suited for beginners, experts.C# learning plan suited for beginners, expertsC# learning plan suited for beginners, expertsC# learning plan suited for beginners, experts",
    Technology: "C#",
    Resources: ['link', 'link', 'link', 'link', 'link', 'link', 'link', 'link', 'link', 'link']
  }
  data: string[] = [];
  
  constructor() {
    for (let index = 0; index < 2; index++) {
      this.data.push(this.plan.Resources[index]);
    }
  }

  ngOnInit() {
  }
  
}
