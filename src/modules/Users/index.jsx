import React, {useState} from 'react';
import { Row, Col } from 'antd';
import { Contact } from '../../components'
import './style.scss';
import { useSelector } from 'react-redux';
import { contactSelector, genderSelector, nationalitySelector, searchSelector } from '../../redux/selector/selector';
import { Pagination } from '../../components/index'
import usePagination from '../../components/Pagination/hook';


export default function Users() {
  const contacts = useSelector(contactSelector);
  const search = useSelector(searchSelector);
  const gender = useSelector(genderSelector);
  const nationality = useSelector(nationalitySelector);

  const filterContacts = contacts?.filter((contact) => {
    return ((contact ? contact.name.first.includes(search) : true)
    && (gender ? contact.gender === gender : true)
    && (nationality ? contact.location.country === nationality : true))
  })

  const paginationList = filterContacts ? Array.from(Array(Math.ceil(filterContacts.length / 12)), (_,i) => i + 1) : [];
  const {
    page,
    next,
    prev,
    list,
    goPage,
    first,
    last,
    getList
  } = usePagination(paginationList)

  if(!contacts) return null;

  return (
    <div>
      <Row gutter={[16, 24]}>
      {
        filterContacts.slice(page * 12 - 12, page * 12).map((contact) => {
          return (
          <Col className="gutter-row" span={4}>
            <Contact data={contact}/>
          </Col>
        )})
      }
      </Row>
      <Pagination filterContacts={filterContacts} pageList={page} next={next} list={list} prev={prev} goPage={goPage} first={first} last={last} getList={getList} />
    </div>
  );
}
