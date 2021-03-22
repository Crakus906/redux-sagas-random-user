import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {gitHub, linkedIn} from '../../redux/action/user'

import './style.scss';

export default function LinkedIn() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(linkedIn())
    dispatch(gitHub())
  })

  return (
    <div className="LinkedIn">
        LinkedIn
    </div>
  );
}
