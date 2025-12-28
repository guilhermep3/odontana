export const Faixa = () => {

  return (
    <div className="faixa">
      {Array.from({ length: 15 }, (_, index) => (
        <div className="faixa-box" key={index}>
          <img src="./svgs/teeth-clean-svgrepo-com.svg" alt="teeth image" />
          <p>Odontana</p>
        </div>
      ))}
    </div>
  )
}