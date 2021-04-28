import React, { Component } from 'react'
import ChatData from "assets/data/chat.data.json"
import { Badge, Input } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { COLOR_1 } from 'constants/ChartConstant';
import { SearchOutlined } from '@ant-design/icons';

export class ChatMenu extends Component {

	state = {
		list: ChatData
	}

	openChat = id => {
		const { history, match } = this.props
		history.push(`${match.url}/${id}`)
		const data = this.state.list.map( elm => {
			if(elm.id === id) {
				elm.unread = 0
			}
			return elm
		})
		this.setState({
			list: data
		})
	}

	searchOnChange = e => {
		const query = e.target.value;
		const data = ChatData.filter(item => {
			return query === ''? item : item.name.toLowerCase().includes(query)
		});
		this.setState({
			list: data
		})
	}

	render() {
		const { list } = this.state
		const id = parseInt(this.props.location.pathname.match(/\/([^/]+)\/?$/)[1])
		return (
			<div className="chat-menu">
				<div className="chat-menu-toolbar">
					<Input 
						placeholder="Search" 
						onChange={(e) => this.searchOnChange(e)}
						prefix={
							<SearchOutlined className="font-size-lg mr-2"/>
						}
					/>
				</div>
				<div className="chat-menu-list">
					{
						list.map( (item, i) => (
							<div 
								key={`chat-item-${item.id}`} 
								onClick={() => this.openChat(item.id)} 
								className={`chat-menu-list-item ${i === (list.length - 1)? 'last' : ''} ${item.id === id? 'selected' : ''}`}
							>
								<AvatarStatus src={item.avatar} name={item.name} subTitle={item.msg[item.msg.length - 1].text}/>
								<div className="text-right">
									<div className="chat-menu-list-item-time">{item.time}</div>
									{item.unread === 0 ? <span></span> : <Badge count={item.unread} style={{backgroundColor: COLOR_1}}/>}
								</div>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

export default ChatMenu
