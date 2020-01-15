import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class Share extends Component {
  render() {
    const url = window.location;
    return (
      <div className="share-field">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <CopyToClipboard text={url}>
              <Button color="success">Copy and share link!</Button>
            </CopyToClipboard>
          </InputGroupAddon>
          <Input disabled value={url} />
        </InputGroup>
      </div>
    )
  }
}


export default Share;
