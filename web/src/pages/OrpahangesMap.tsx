import React from "react";
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMakerImg from '../images/map-maker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
        <img src={mapMakerImg} alt="Happy"/>
        
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando
          a sua visita
        </p>
        </header>

        <footer>
          <strong>Petrópolis</strong>
          <span>Rio de Janeiro</span>
        </footer>
        
      </aside>

      <Map 
        center={[-22.3843617,-43.1739833]}
        zoom={10.75}
        style={{ width:'100%', height:'100%'}}
        >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;
