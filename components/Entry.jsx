export default function Entry({
  img,
  country,
  googleMapsLinks,
  title,
  dates,
  text,
}) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={img.src} alt={img.alt} />
      </div>
      <div className="info-container">
        <img src="marker.png" alt="map marker icon" />
        <span className="country">{country}</span>
        <a href={googleMapsLinks}>View on Google Maps</a>
        <h2 className="entry-title">{title}</h2>
        <p className="trip-dates">{dates}</p>
        <p className="entry-text">{text}</p>
      </div>
    </article>
  );
}
