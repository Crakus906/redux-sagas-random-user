import React, { useState } from 'react';
import Modal from './ModalHeader'
import Button from '../Button'
import { useHistory } from 'react-router-dom';
import { CONTACTS, ROOT } from '../../constants/routes';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './style.scss';

export default function Haeder({user}) {
    const [modal, setModal] = useState(false)
    const history = useHistory()

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
          3rd menu item（disabled）
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
            <Button 
              className="btn"
              onClick={() => history.push(CONTACTS)}
            >
              Contacts
            </Button>
       </div>
       {   
          user && user ?
            <Dropdown 
              // className="btn"  
              overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
              </a>
            </Dropdown>
          :    
          <Button
            className="btn"
            onClick={() => setModal(true) }
          >
            Sing In
          </Button>
       }
        <Modal 
            show={modal}
            onShow={setModal}
        />
    </div>
  );
}
