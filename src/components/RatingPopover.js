import React, { useState } from 'react';
import { Popover, OverlayTrigger,  Button} from 'react-bootstrap';
import StarRating from './StarRating'
import { FaArrowCircleDown} from 'react-icons/fa';

  
  const RatingPopover = ({ratingsCount}) => {

    const popover = (
      <Popover id="popover-basic" >
        <Popover.Title as="h3">Rating Details</Popover.Title>
        <Popover.Content>
          <ul>
            {ratingsCount.map((rating,i)=>
            <li> <StarRating rating={5-i} size={20}/> {rating} Reviews</li>
            )
  
            }
          </ul>
        </Popover.Content>
      </Popover>
    );
    return (
      <OverlayTrigger trigger="focus" placement="right" overlay={popover} >
        <button type="button" class="btn btn-light ml-2"><FaArrowCircleDown /></button>
      </OverlayTrigger>
    );
  }
  
  
  export default RatingPopover;
 