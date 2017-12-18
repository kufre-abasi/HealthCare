import {Component, OnInit, DoCheck} from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck {
  specialists = ['ENT', 'Dermatologist', 'Neurologist', 'Podiatrist', 'Physical_therapist'];
  description = {
    ENT: 'An ENT doctor specializes in conditions and disorders that affect the areas in and around your ears, nose, and throat.',
    Dermatologist: 'A dermatologist is a doctor who specializes in the treatment of conditions and disorders that affect the skin,hair,nails,mouth,node,eyelids',
    Neurologist: 'A neurologist treats conditions and disorders of the nervous system. includes brain,spinal cord,nerves,eyes,skin',
    Podiatrist: 'A podiatrist diagnoses and treats conditions of the foot, ankle, leg, and their surrounding structures.',
    Physical_therapist: 'A physical therapist is a highly trained and licensed medical professional that provides many different types of services. Physical therapists work with people of all ages, sizes, and abilities.',
  };
  locations = ['chennai', 'coimbatore', 'trichy', 'madurai'];
  addUser;
  dashboardClick;
  usersByRole = '';
  selectedSpecialist = 'ENT';
  showSpecialist = false;
  showLocation = false;
  showDescription = false;
  selectedLocation = '';

  constructor(private appcomponent: AppComponent, private router: Router) {

  }

  ngOnInit() {
    console.log('In dashboards', this.appcomponent.isLoggedIn());
  }

  getLocation(event) {
    this.selectedLocation = this.locations[event.target.value];
    this.showLocation = true;
  }

  getSpecialist(event) {
    this.selectedSpecialist = event.target.value;
    this.showDescription = true;
  }

  ngDoCheck() {
    this.dashboardClick = this.appcomponent.dashboardClick;
    this.addUser = this.appcomponent.addUser;

  }

}
