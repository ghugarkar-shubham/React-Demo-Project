const Card = (Props) =>{
    return(
        <div>
            <div className="card">
                <img src={Props.img}/>
                <h1>{Props.user}, {Props.age}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                <button>View Profile</button>
            </div>
        </div>
    )
}

export default Card;