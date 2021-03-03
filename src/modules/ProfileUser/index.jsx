import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selector/selector'
import Button from '../../components/Button'

import './style.scss';

export default function ProfileUser() {
  const user = useSelector(userSelector) 

  if(!user) return null

  const {
    phone,
    name: {title, first, last},
    dob: { age },
    email,
    picture: { large },
    location: {
      country, state, city, street: { name, number },
    },
  } = user
  
  return (
    <div className="wraperProfile">
        <div className="profile">Profile</div>
        <div className="container">
          <img className="img" src={large} alt=""/>
          <div className="content">
            <div className="name" >{`${title}. ${first} ${last} `}<div className="age">({age} years)</div></div>
            <div className="link">{email}</div>
            <div className="link">{phone}</div>
            <div className="location">{`/${country}/${state}, ${city}, ${name}, ${number}`}</div>
            <Button className="button">dutch</Button>
          </div>
        </div>
    </div>
  );
}
