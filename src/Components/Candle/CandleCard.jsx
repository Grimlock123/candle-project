import "./CandleCard.css"
function CandleCard(props) {
  return(
    <div className="outline">
      <div className="imgArea">
        <p>image placeholder</p>
      </div>
      <div className="candleTxt">
        <h3>{props.title}</h3>  
        <p>Candle Scent</p>
        
        <div className="bottomLine">
          <p>Candle Price</p>
          <p>Add to cart</p>
        </div>  

      </div>
    </div>
  )
}
export default CandleCard
