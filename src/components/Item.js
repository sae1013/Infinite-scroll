import React,{useEffect} from 'react'

function Item(props) {
    useEffect(()=>{
        console.log("아이템렌더링횟수");
    });
    const imgUrl = props.item.medium_cover_image;
    return (
        <div className="item">
            <h1 className="movie-title">{props.item.title}</h1>
            <div className="movie-image">
                <img src={imgUrl}></img>
            </div>
            

            
        </div>
    )
}

export default React.memo(Item);
