import React, { useState } from 'react';
import Modal from './ModalHeader'
import Button from '../Button'
import { useHistory,Link } from 'react-router-dom';
import { CONTACTS, PROFILE, ROOT } from '../../constants/routes';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './style.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/action/user';

export default function Haeder({user}) {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const history = useHistory()
    // const userImg = useSelector(userSelector)

    const handleLoguot = () => {
      dispatch(logout());
      history.push(ROOT)
    }
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to={PROFILE}>
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Button onClick={() => handleLoguot()} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    );
    return (
    <div className="header">
        <div className="headerMenu">
            <Button 
              className="btn"
              onClick={() => history.push(ROOT)}
            >
              Home
            </Button>
            {
              user && <Button 
              className="btn"
              onClick={() => history.push(CONTACTS)}
            >
              Contacts
            </Button>
            }
       </div>
       {
        !user && <Button
         className="btn"
         onClick={() => setModal(true) }
        >
         Sing In
       </Button>
       }
       {   
          user &&
          <div className="blockRight">
            <Dropdown 
              // className="btn"  
              overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               {`${user.name.title} ${user.name.first} ${user.name.last}`} <DownOutlined />
              </a>
            </Dropdown>
            <img className="userImg" src={user.picture.thumbnail} alt=""/>
          </div>
       }
        <Modal 
            show={modal}
            onShow={setModal}
        />
    </div>
  );
}
