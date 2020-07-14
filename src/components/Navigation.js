import React from 'react';
import moveOn from './MoveOn'
import { useHistory } from 'react-router-dom';



export default function Navigation(props) {
    //changes routes according to the new page where player is, disabled buttons dissapear or are inposible to press
    // this will also be the navigation component after im done making it
// lnking:
    // northEast
    // northCenter
    // northWest
    // centerEast
    // centerWest
    // southEast
    // southCenter
    // southWest
//disabling buttons:
    // northWestEvents
    // northCenterEvents
    // northEastEvents
    // centerWestEvents
    // centerEastEvents
    // southWestEvents
    // southCenterEvents
    // southEastEvents

    
    let history = useHistory();
    // history.push(route);

    return (
        <div className="navigation-box-wrapper">
            <div className="navigation nav-row-1">
                <div className="navigation nav-button north-west  " 
                style={{ pointerEvents: props.northWestEvents }} 
                onClick={(e) => history.push(props.northWest)}>
                    <span>&#x02196;</span>
                </div>
                <div className="navigation nav-button north-center " 
                style={{ pointerEvents: props.northCenterEvents }}
                 onClick={(e) => history.push(props.northCenter)}>
                 <span>&#x02191;</span>
                 </div>
                <div className="navigation nav-button north-east " 
                style={{ pointerEvents: props.northEastEvents }} 
                onClick={(e) => history.push(props.northEast)}>
                    <span>&#x02197;</span>
                    </div>
            </div>
            <div className="navigation nav-row-2">
                <div className="navigation nav-button center-west " 
                style={{ pointerEvents: props.centerWestEvents }} 
                onClick={(e) => history.push(props.centerWest)}>
                    <span>&#x02190;</span>
                    </div>
                <div className="navigation nav-button center-center empty">
                    <span>&#x02196;</span>
                    </div>
                <div className="navigation nav-button center-east " 
                style={{ pointerEvents: props.centerEastEvents }} 
                onClick={(e) => history.push(props.centerEast)}>
                    <span>&#x02192;</span>
                    </div>
            </div>
            <div className="navigation nav-row-3">
                <div className="navigation nav-button south-west " 
                style={{ pointerEvents: props.southWestEvents }} 
                onClick={(e) => history.push(props.southWest)}>
                    <span>&#x02199;</span></div>
                <div className="navigation nav-button south-center " 
                style={{ pointerEvents: props.southCenterEvents }} 
                onClick={(e) => history.push(props.southCenter)}>
                <span>&#x02193;</span>
                </div>
                <div className="navigation nav-button south-east " 
                style={{ pointerEvents: props.southEastEvents }} 
                onClick={(e) => history.push(props.southEast)}>
                    <span>&#x02198;</span>
                    </div>

            </div>





        </div>)
}