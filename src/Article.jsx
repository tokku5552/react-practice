import React, { useState } from 'react';
import LikeButton from './LikeButton'

const Article = (props) => {
    const [isPublished, togglePublish] = useState(false);
    return (
        <div>
            <h2>{props.title}です</h2>
            <p>公開設定：<input type='checkbox' checked={props.isPublished} id="chekc" onClick={() => togglePublish(!isPublished)} /></p>
            <LikeButton />
        </div>
    )
};

export default Article;