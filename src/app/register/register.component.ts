import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { State } from 'src/types/state';
import { City } from 'src/types/city';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  states: State[];
  cities: City[];
  stateId = 0;

  constructor(private service: StateService) {}

  ngOnInit() {
    this.service.getStates().subscribe(response => {
      this.states = response;
    });
    console.log(this.stateId);
  }

  currentState() {
    if (this.stateId === 0) {
      this.cities = [];
    } else {
      this.service.getCitiesOfState(this.stateId).subscribe(response => {
        this.cities = response;
      });
    }
  }
}
