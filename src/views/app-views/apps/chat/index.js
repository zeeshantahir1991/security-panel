import React, { Component } from 'react'
import InnerAppLayout from 'layouts/inner-app-layout';
import ChatContent from './ChatContent';
import ChatMenu from './ChatMenu';

export class Chat extends Component {
	render() {
		return (
			<div className="chat">
				<InnerAppLayout 
					sideContent={<ChatMenu {...this.props}/>}
					mainContent={<ChatContent {...this.props}/>}
					sideContentWidth={450}
					sideContentGutter={false}
					border
				/>
			</div>
		)
	}
}

export default Chat
