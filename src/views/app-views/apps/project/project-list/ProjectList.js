import React, { Component } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Radio, Button, Row, Col, Tooltip, Tag, Progress, Avatar, Dropdown, Menu, Card } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';
import ProjectListData from './ProjectListData';
import { 
	PaperClipOutlined, 
	CheckCircleOutlined, 
	ClockCircleOutlined, 
	EllipsisOutlined, 
	EyeOutlined, 
	EditOutlined,
	DeleteOutlined
} from '@ant-design/icons';
import utils from 'utils';
import { COLORS } from 'constants/ChartConstant';

const VIEW_LIST = 'LIST';
const VIEW_GRID = 'GRID';

const ItemAction = ({id, removeId}) => (
	<Dropdown 
		placement="bottomRight"
		overlay={
			<Menu>
				<Menu.Item key="0">
					<EyeOutlined />
					<span>View</span>
				</Menu.Item>
				<Menu.Item key="1">
					<EditOutlined />
					<span>Edit</span>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="2" onClick={() => removeId(id)}>
					<DeleteOutlined />
					<span>Delete Project</span>
				</Menu.Item>
			</Menu>
		} 
		trigger={['click']}
	>
		<a href="/#" className="text-dark" onClick={e => e.preventDefault()}>
			<EllipsisOutlined  className="font-size-lg" style={{'transform': 'rotate(90deg)'}}/>
		</a>
	</Dropdown>
)

const ItemHeader = ({name, category}) => (
	<div>
		<h4 className="mb-0">{name}</h4>
		<span className="text-muted">{category}</span>
	</div>
)

const ItemInfo = ({attachmentCount, completedTask, totalTask, statusColor, dayleft}) => (
	<div className="d-flex align-items-center">
		<div className="mr-3">
			<Tooltip title="Attachment">
				<PaperClipOutlined className="text-muted font-size-md"/>
				<span className="ml-1 text-muted">{attachmentCount}</span>
			</Tooltip>
		</div>
		<div className="mr-3">
			<Tooltip title="Task Completed">
				<CheckCircleOutlined className="text-muted font-size-md"/>
				<span className="ml-1 text-muted">{completedTask}/{totalTask}</span>
			</Tooltip>
		</div>
		<div>
		<Tag className={statusColor === "none"? 'bg-gray-lightest' : ''} color={statusColor !== "none"? statusColor : ''}>
			<ClockCircleOutlined />
			<span className="ml-2 font-weight-semibold">{dayleft} days left</span>
		</Tag>
		</div>
	</div>
)

const ItemProgress = ({progression}) => (
	<Progress percent={progression} strokeColor={getProgressStatusColor(progression)} size="small"/>
)

const ItemMember = ({member}) => (
	<>
		{member.map((elm, i) => (
				i <= 2?
			<Tooltip title={elm.name} key={`avatar-${i}`}>
				<Avatar size="small" className={`ml-1 cursor-pointer ant-avatar-${elm.avatarColor}`} src={elm.img} >
					{elm.img? '' : <span className="font-weight-semibold font-size-sm">{utils.getNameInitial(elm.name)}</span>}
				</Avatar>
			</Tooltip>
			:
			null
		))}
		{member.length > 3 ?
			<Tooltip title={`${member.length - 3} More`}>
				<Avatar size={25} className="ml-1 cursor-pointer bg-white border font-size-sm">
					<span className="text-gray-light font-weight-semibold">+{member.length - 3}</span>
				</Avatar>
			</Tooltip>
			:
			null
		}
	</>
)

const ListItem = ({ data, removeId }) => (
	<div className="bg-white rounded p-3 mb-3 border">
		<Row align="middle">
    	<Col xs={24} sm={24} md={8}>
				<ItemHeader name={data.name} category={data.category} />
			</Col>
			<Col xs={24} sm={24} md={6}>
				<ItemInfo 
					attachmentCount={data.attachmentCount}
					completedTask={data.completedTask}
					totalTask={data.totalTask}
					statusColor={data.statusColor}
					dayleft={data.dayleft}
				/>
			</Col>
			<Col xs={24} sm={24} md={5}>
				<ItemProgress progression={data.progression} />
			</Col>
			<Col xs={24} sm={24} md={3}>
				<div className="ml-0 ml-md-3">
					<ItemMember member={data.member}/>
				</div>
			</Col>
			<Col xs={24} sm={24} md={2}>
				<div className="text-right">
					<ItemAction id={data.id} removeId={removeId}/>
				</div>
			</Col>
		</Row>
	</div>
)

const GridItem = ({ data, removeId }) => (
	<Card>
		<div className="d-flex justify-content-between align-items-center">
			<ItemHeader name={data.name} category={data.category} />
			<ItemAction id={data.id} removeId={removeId}/>
		</div>
		<div className="mt-2">
			<ItemInfo 
				attachmentCount={data.attachmentCount}
				completedTask={data.completedTask}
				totalTask={data.totalTask}
				statusColor={data.statusColor}
				dayleft={data.dayleft}
			/>
		</div>
		<div className="mt-3">
			<ItemProgress progression={data.progression} />
		</div>
		<div className="mt-2">
			<ItemMember member={data.member}/>
		</div>
	</Card>
)

const getProgressStatusColor = progress => {
	if(progress >= 80) {
		return COLORS[1]
	}
	if(progress < 60 && progress > 30) {
		return COLORS[3]
	}
	if(progress < 30) {
		return COLORS[2]
	}
	return COLORS[0]
}

export class ProjectList extends Component {

	state = {
		view: VIEW_GRID,
		list: ProjectListData
	}

	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	} 

	onChangeProjectView = e => {
		this.setState({
			view: e.target.value
		})
	}

	deleteItem(id){
		const data = this.state.list.filter(elm => elm.id !== id)
		this.setState({
			list: data
		})
	}

	render() {
		const { list, view } = this.state;

		return (
			<>
				<PageHeaderAlt className="bg-white border-bottom">
					<div className="container-fluid">
						<div className="py-4 d-flex justify-content-between align-items-center">
							<h2>Projects</h2>
							<div>
								<Radio.Group defaultValue={VIEW_GRID} onChange={this.onChangeProjectView}>
									<Radio.Button value={VIEW_GRID}><AppstoreOutlined /></Radio.Button>
									<Radio.Button value={VIEW_LIST}><UnorderedListOutlined /></Radio.Button>
								</Radio.Group>
								<Button type="primary" className="ml-2">
									<PlusOutlined />
									<span>New</span>
								</Button>
							</div>
						</div>
					</div>
				</PageHeaderAlt>
				<div className={`my-4 ${view === VIEW_LIST? 'container' : 'container-fluid'}`}>
					{
						view === VIEW_LIST ?
						list.map(elm => <ListItem data={elm} removeId={this.deleteItem} key={elm.id}/>)
						:
						<Row gutter={16}>
							{list.map(elm => (
								<Col xs={24} sm={24} lg={8} xl={8} xxl={6} key={elm.id}>
									<GridItem data={elm} removeId={this.deleteItem}/>
								</Col>
							))}
						</Row>
					}
				</div>
			</>
		)
	}
}

export default ProjectList
