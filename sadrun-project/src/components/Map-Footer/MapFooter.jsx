import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import markerIcon from "./assets/marker.svg";
import graph from "./assets/footer_graph.svg";
import whiteGraph from "./assets/white_graph.svg";
import eNamad_1 from "./assets/enamad-2.png";
import eNamad_2 from "./assets/enamad-1.png";
import facebook_logo from "./assets/facebook.svg";
import instagram_logo from "./assets/instagram.svg";
import telegram_logo from "./assets/telegram.svg";
import twitter_logo from "./assets/twitter.svg";
import youtube_logo from "./assets/youtube.svg";

export default function MapFooter() {
  const mapStyle = { width: "100%", height: "100%", zIndex: "0" };
  const position = [34.545343965913055, 50.79106816184002];
  const skater = new Icon({
    iconUrl: `${markerIcon}`,
    iconSize: [30, 43],
    iconAnchor: [14, 45],
    // popupAnchor: [140, 16],
    popupAnchor: [0, -25],
  });

  return (
    <section className={styles.map_footer}>
      <div className={styles.map}>
        <MapContainer
          style={mapStyle}
          center={position}
          zoom={15}
          minZoom={14}
          maxZoom={18}
          zoomControl={false}
        >
          <TileLayer
          url='https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          subdomains={['mt0','mt1','mt2','mt3']}
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={skater} position={position} title="کارخانه نوآوری">
            <Popup>
              <div className={styles.map_popup}>استان قم، قم، بلوار امامت، کارخانه نوآوری</div>
            </Popup>
          </Marker>
        </MapContainer>
        <div className={styles.white_graph}>
          <img src={whiteGraph} alt="" />
        </div>
        <div className={styles.graph}>
          <img
            src={graph}
            alt=""
            onDrag={(e) => {
              e.preventDefault();
            }}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.info}>
            <div className={styles.about_us}>
              <span>بلاگ</span>
              <span>درباره ما</span>
              <span>تماس با ما</span>
              <span>همکاری با ما</span>
              <span>سوالات متداول</span>
            </div>
            <div className={styles.contact_us}>
              <span>شماره تماس</span>
              <span className={styles.phone_num}>+98912123456</span>
              <span className={styles.phone_num}>+98912123456</span>
            </div>
          </div>
          <div className={styles.follow_us_container}>
            <div className={styles.follow_us_logos}>
              <img src={youtube_logo} alt="youtube_logo" />
              <img src={instagram_logo} alt="instagram_logo" />
              <img src={telegram_logo} alt="telegram_logo" />
              <img src={facebook_logo} alt="facebook_logo" />
              <img src={twitter_logo} alt="twitter_logo" />
            </div>
            <span className={styles.follow_us_text}>
              ما را در شبکه های اجتماعی دنبال کنید
            </span>
          </div>
          <div className={styles.enamad_pic}>
            <img src={eNamad_1} alt="" />
            <img src={eNamad_2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
