import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Footer, Pagination } from '../../components/index'
import {FilterBlock, Users, Statistic} from '../../modules/index'
import { contacts } from '../../redux/action/user';
import { userSelector } from '../../redux/selector/selector';


import './style.scss';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contacts())
  })

  const userData = useSelector(userSelector)
  return (
    <div className="wraper">
        <Header user={userData} />
        <div className="wraperContacts">
          <div className="headerConstacts">
            <div className="title">Contacts</div>
          </div>  
          <FilterBlock />
          <Users />
          <Statistic />
        </div>
        <Footer />
    </div>
  );
}
