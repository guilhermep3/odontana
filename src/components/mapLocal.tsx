export const MapLocal = () => {

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1459.1481080511285!2d-46.71543133297425!3d-23.60001674516976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56dc138906d5%3A0xfa2f75da82a1dd3c!2sHospital%20Israelita%20Albert%20Einstein!5e1!3m2!1spt-BR!2sbr!4v1740139594791!5m2!1spt-BR!2sbr"
      width="560"
      height="560"
      style={{ border: 0, borderRadius: '32px' }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps - Hospital Israelita Albert Einstein"
      className="map-google"
    ></iframe>)
}