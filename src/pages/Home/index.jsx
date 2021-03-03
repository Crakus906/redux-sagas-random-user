import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Footer } from '../../components/index'
import { userSelector } from '../../redux/selector/selector';

import './style.scss';

export default function Home() {
  const userData = useSelector(userSelector)
  return (
    <div className="wraper">
        <Header user={userData} />
        <Footer />
    </div>
  );
}
