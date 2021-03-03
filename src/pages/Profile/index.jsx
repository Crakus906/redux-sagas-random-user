import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Footer } from '../../components/index'
import { user } from '../../redux/action/user'
import ProfileUser from '../../modules/ProfileUser/index'

import './style.scss';
import { userSelector } from '../../redux/selector/selector';

export default function Profile() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(user())
  }, [dispatch])

  const userData = useSelector(userSelector);
  
  return (
    <div className="wraper">
        <Header user={userData}/>
        <ProfileUser />
        <Footer />
    </div>
  );
}
