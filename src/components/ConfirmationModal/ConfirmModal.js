import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';

class ConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.handleClose();
  };

  render() {
    const {title, size, content, open, handleConfirmation} = this.props;

    return (
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>{title || 'Delete Your Account'}</Modal.Header>
          <Modal.Content>
            <p>{content || 'Are you sure you want to delete this?'}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.props.handleClose()} negative>No</Button>
            <Button onClick={() => handleConfirmation()} positive icon='checkmark' labelPosition='right' content='Yes'/>
          </Modal.Actions>
        </Modal>
    );
  }
}

export default ConfirmModal;