import React, { Component } from 'react'
import { Badge, Input } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { COLOR_1 } from 'constants/ChartConstant';
import { SearchOutlined } from '@ant-design/icons';

export class NotificationList extends Component {

	state = {
		list: this.props.NotData ? this.props.NotData : []
	}

	

	searchOnChange = e => {
		const query = e.target.value;
		const data = this.props.NotData?.filter(item => {
			return query === '' ? item : item.name.toLowerCase().includes(query)
		});
		this.setState({
			list: data
		})
	}

	render() {
		const { list } = this.state
		const id = parseInt(this.props.location.pathname.match(/\/([^/]+)\/?$/)[1])
		return (
			<div className="chat-menu" style={{ height: 400, overflow: 'scroll' }}>
				<div className="chat-menu-toolbar">
					<Input
						placeholder="Search"
						onChange={(e) => this.searchOnChange(e)}
						prefix={
							<SearchOutlined className="font-size-lg mr-2" />
						}
					/>
				</div>
				<div className="chat-menu-list">
					{
						list.map((item, i) => (
							<div
								key={`chat-item-${item.id}`}
								// onClick={() => this.openChat(item.id)}
								className={`chat-menu-list-item ${i === (list.length - 1) ? 'last' : ''} ${item.id === id ? 'selected' : ''}`}
							>
								<AvatarStatus src={item.avatar} name={item.name} subTitle={item.msg} />
								<div className="text-right">
									<div className="chat-menu-list-item-time">{item.time}</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

export default NotificationList
