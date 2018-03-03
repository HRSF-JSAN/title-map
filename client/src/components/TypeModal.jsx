import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledTooltip, Button, Modal,
  ModalHeader, ModalBody, ModalFooter,
  Input, InputGroup, InputGroupAddon,
} from 'reactstrap';
import IosEdit from 'react-icons/lib/io/edit';

const http = require('../http-helpers');

class TypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      type: '',
    };
    this.toggle = this.toggle.bind(this);
    this.addType = this.addType.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  addType() {
    this.props.addNewType(this.state.type);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}><IosEdit />Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Input
              value={this.state.type}
              onChange={e => this.setState({ type: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => { this.toggle(); this.addType(); }}>
              Submit
            </Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

TypeModal.propTypes = {
  className: PropTypes.string,
  addNewType: PropTypes.func,
};

TypeModal.defaultProps = {
  className: 'typeModal',
  addNewType: () => {},
};

export default TypeModal;
