import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom';
import Conversation from './Conversation';

const ConversationEmpty = () => (
  <div className="chat-content-empty">
    <div className="text-center">
      <img src="/img/others/img-11.png" alt="Start a Conversation" />
      <h1 className="font-weight-light">Start a conversation</h1>
    </div>
  </div>
)

export class ChatContent extends Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={ConversationEmpty} />
        <Route exact path={`${match.url}/:id`} component={Conversation} />
      </Switch>
    )
  }
}

export default ChatContent
