/* Real Google map (Embed — no API key) inside the branded frame. */

const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7409061955736!2d101.71441517499515!3d3.1628283968125217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37dac31f2793%3A0x86de08541d1b0d0b!2sMegan%20Avenue%20I!5e0!3m2!1sen!2smy!4v1782889138281!5m2!1sen!2smy";

export default function ContactMap({ locale = "en" }: { locale?: "en" | "zh" }) {
  return (
    <div className="cx-map">
      <iframe
        className="cx-map-frame"
        src={EMBED_SRC}
        title={locale === "zh" ? "嶼嶼創意工作室位置（Google 地圖）" : "Yuyu Creative studio location on Google Maps"}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
