import React from 'react';

const ImageList = (props) => {
   const images = props.images.map((image) => {
        return <div><img  alt={image.description}   key={image.id}   src={image.urls.regular}/></div>;
        }
    );
    return <div>{images}</div>;
}

export default ImageList;
