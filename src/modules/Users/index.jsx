import React from 'react';
import { Row, Col } from 'antd';
import { Contact } from '../../components'
import './style.scss';
import { useSelector } from 'react-redux';
import { contactSelector, searchSelector } from '../../redux/selector/selector';

export default function Users() {
  const contacts = useSelector(contactSelector);
  const search = useSelector(searchSelector)

  console.log(search);
  return (
    <Row gutter={[16, 24]}>
      {
        contacts && contacts.map((contact) => (
          <Col className="gutter-row" span={4}>
            <Contact data={contact}/>
          </Col>
        ))
      }
    </Row>
  );
}
