import React from 'react';
//links the google maps button to google maps site.
export default props => (
<div className='well-jumbotron'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href={"https://maps.google.com/?q=" + props.location[0] + "," + props.location[1]}><button type="button">Map View</button></a>
</div>    
);