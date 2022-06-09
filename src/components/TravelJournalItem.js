import React from 'react';
import LocationIcon from '../Assets/Location-Icon.svg';
import '../Styles/TravelJournalItem.css';

export default function TravelJournalItem(props) {
  // console.log(props);
  return (
    <div className="travel">
      <img className="travel--image" src={props.imageUrl} alt={props.title} />
      <div className="travel--contents">
        <div className="travel--location">
          <img src={LocationIcon} alt="" />
          <p>{props.location}</p>
          <p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
        </div>
        <h2 className="travel--title">{props.title}</h2>
        <h3 className="travel--date">
          {props.startDate}&nbsp;-&nbsp;{props.endDate}
        </h3>
        <p className="travel--description">{props.description}</p>
      </div>
    </div>
  );
}
