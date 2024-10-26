import './SingleCard.css'
export default function SingleCard({card,handleChoice,flipped,disabled}){
    const handleClick =()=>{
        if(!disabled)
{ 
    handleChoice(card)
}
    }
    return(
<div className='card' key={card.id}>
<div className={flipped ? "flipped":""}>
  <img className="front" src={card.src} alt="" />
  <img className='back' onClick={handleClick}  src="https://i.pinimg.com/originals/34/1e/80/341e800b1f29d3e34ea2eba5a6af205c.gif" alt="" />
</div>
</div>
)
}