import { Modal } from 'antd';
import Form from './SingUpForm';

import './style.scss';

export default function ModalHeader({show, onShow}) {
    console.log(show);
  return (
      <Modal className="modal"
        title="Sign In"
        centered
        visible={show}
        onCancel={() => onShow(false)}
      >
        <Form />
      </Modal>
  )
} 