import './Card.css';  

const Card = (props) =>{
    return(
        <div className="card">
        <img src={props.link} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.href}>
        <button>View</button>
        </a>
        </div>
    )
}
export default Card;