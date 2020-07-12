import React from 'react';
import moveOn from './MoveOn'



export default function Navigation(props){
//changes routes according to the new page where player is, disabled buttons dissapear or are inposible to press
// this will also be the navigation component after im done making it

// northEast
// northCenter
// northWest

// centerEast

// centerWest

// southEast
// southCenter
// southWest

return(
<div className="navigation-box-wrapper">
<div className="navigation nav-row-1">
<div className = "navigation nav-button north-west"  onClick= {(e) => moveOn(props.northEast)}></div>
<div className = "navigation nav-button north-center" onClick={(e) => moveOn(props.northCenter)}></div>
<div className = "navigation nav-button north-east" onClick={(e) => moveOn(props.northWest)}></div>
</div>
<div className="navigation nav-row-2">
<div className = "navigation nav-button center-west" onClick={(e) => moveOn(props.centerEast)}></div>
<div className = "navigation nav-button center-center empty"></div>
<div className = "navigation nav-button center-east" onClick={(e) => moveOn(props.centerWest)}></div>
</div>
<div className="navigation nav-row-3">
<div className = "navigation nav-button south-west" onClick={(e) => moveOn(props.southEast)}></div>
<div className = "navigation nav-button south-center" onClick={(e) => moveOn(props.southCenter)}></div>
<div className = "navigation nav-button south-east" onClick={(e) => moveOn(props.southWest)}></div>

</div>





    </div>)
}