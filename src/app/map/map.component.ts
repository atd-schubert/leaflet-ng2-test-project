import { Component, OnInit } from '@angular/core';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  public tileLayerUrl: string = OSM_TILE_LAYER_URL;

  ngOnInit() {
  }

}
