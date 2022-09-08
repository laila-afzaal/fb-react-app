import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import image from "./img/img1.jpg";
import image4 from "./img/img4.jpg";
import image5 from "./img/img5.jpg";

const MediaCard = ({ title, body, imageUrl }) => (
  <div className='mediaCard'>
    <h2>
      {title}
    </h2>
    
    <p>
      {body}
    </p>
    <img width={400} src={imageUrl} alt="" />
  </div>
)

const MediaPage = () => (
  <>
    <MediaCard
      title="Nature"
      body="Scenery"
      imageUrl={image}
    />
    <MediaCard
      title="Nature"
      body="Scenery"
      imageUrl={image4}
    />
    <MediaCard
      title="Nature"
      body="Scenery"
      // imageUrl="https://data.whicdn.com/images/315718705/original.jpg"
      imageUrl={image5}
    />
     <MediaCard
      title="Nature"
      body="Scenery"
      imageUrl={image4}
    />
     <MediaCard
      title="Nature"
      body="Scenery"
      imageUrl={image5}
    />
  </>
)


ReactDOM.render(<MediaPage />, document.querySelector('#root'));