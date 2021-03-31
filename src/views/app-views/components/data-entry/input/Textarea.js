import React, { Component } from "react";
import { Input } from "antd";

const { TextArea } = Input;

export class Textarea extends Component {
  render() {
    let { rows } = this.props;

    return <TextArea rows={rows ? rows : 4} />;
  }
}

export default Textarea;
