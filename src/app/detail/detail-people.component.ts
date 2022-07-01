import { Component, OnInit ,Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.css']
})
export class DetailPeopleComponent implements OnInit {
  id!: string;
  people:any;
  constructor(private route:ActivatedRoute,private api : ApiService,private router: Router) { }
  options: any;

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.api.getPeoplesById(this.id).subscribe(data => {
      this.people = data;
    });


    this.options = {
      center: {lat: this.people.geo.lat, lng: this.people.geo.lng},
      zoom: 12
    };
    
  }
}
