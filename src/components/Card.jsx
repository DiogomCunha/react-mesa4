function Card(props){
    const {img, title, p} = props;

    return(
        <div style={ {width: 182,height:210, border:"1px solid", background:"#EFEFEF" }}>
            <img className="img-card" width={152} src={img} alt={title} />
            <span>{title}</span>
            <p>{p}</p>
        </div>
    )
}
export default Card;