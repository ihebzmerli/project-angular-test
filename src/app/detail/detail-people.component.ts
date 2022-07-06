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


  //Gmap declaration
  zoom = 12
  center!: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  constructor(private route:ActivatedRoute,private api : ApiService,private router: Router) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.api.getPeoplesById(this.id).subscribe(data => {
      this.people = data;
    });

    // inisialisation gmap
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: this.people.address.geo.lat,
        lng: this.people.address.geo.lng,
      }
    })
  }
  
  
  // function of gmap
  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--
  }
}
