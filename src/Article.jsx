import React from 'react';
import LikeButton from './LikeButton'

const Article = (props) => {
    return (
        <div>
            <h2>{props.title}です</h2>
            <p>公開設定：<input type='checkbox' checked={props.isPublished} id="chekc" onClick={()=>props.toggle()}/></p>
            <LikeButton count={props.count}/>
        </div>
    )
};

export default Article;