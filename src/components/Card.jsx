
function Card(props){
    return(
     <div className={props.bgcolor}>
        <h1 className="text-2xl font-bold ">{props.head}</h1>
        <p className="font-semibold">{props.p} --- Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum, </p>
        <button className={props.btncolor}>{props.btn}</button>
     </div>
    )
}

export default Card;