import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selector/selector'
import Button from '../Button'

import './style.scss';

export default function ProfileUser(data) {

  const {
    phone,
    name: {title, first, last},
    dob: { age },
    email,
    picture: { large },
    location: {
      country, state, city, street: { name, number },
    },
  } = data.data
  return (
    <div className="wraperContact">
          <img className="img" src={large} alt=""/>
          <div className="content">
            <div className="name" >{`${title}. ${first} ${last}`}<div className="age">({age} years)</div></div>
            <div className="link">{email}</div>
            <div className="link">{phone}</div>
            <div className="location">{`/${country}/${state}, ${city}, ${name}, ${number}`}</div>
        </div>
    </div>
  );
}
