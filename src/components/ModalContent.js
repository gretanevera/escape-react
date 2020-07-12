import React from 'react';

export default function ModalContent(props) {
  
    return (
        <div id="myModal" className="modal">
<div className="modal-content">
  <span className="close">&times;</span>
 <img className='notes' src={props.image}></img>
 <p className='notification-text'>click anywhere outside the picture to close</p>
</div>

</div>
    );
}

