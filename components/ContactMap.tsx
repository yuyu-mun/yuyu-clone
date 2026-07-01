/* Real Google map (Embed — no API key) inside the branded frame,
   plus one-tap navigation buttons. */

const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7409061955736!2d101.71441517499515!3d3.1628283968125217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37dac31f2793%3A0x86de08541d1b0d0b!2sMegan%20Avenue%20I!5e0!3m2!1sen!2smy!4v1782889138281!5m2!1sen!2smy";

const GEO = { lat: 3.1628284, lng: 101.7144152 };
const wazeUrl = `https://www.waze.com/ul?ll=${GEO.lat}%2C${GEO.lng}&navigate=yes`;

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function ContactMap({ googleMapsUrl }: { googleMapsUrl: string }) {
  return (
    <>
      <div className="cx-map">
        <iframe
          className="cx-map-frame"
          src={EMBED_SRC}
          title="Yuyu Creative studio location on Google Maps"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="cx-mapbar">
        <a className="cx-mapbtn cx-mapbtn-g" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <PinIcon /> Open in Maps
        </a>
        <a className="cx-mapbtn cx-mapbtn-w" href={wazeUrl} target="_blank" rel="noopener noreferrer">
          <PinIcon /> Waze
        </a>
      </div>
    </>
  );
}
