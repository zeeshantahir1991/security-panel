import React, { Component } from 'react'
import { Calendar, Badge, Card, Row, Col, Modal, Form, Input, Select, TimePicker, Button, Tooltip } from 'antd';
import CalendarData from './CalendarData';
import moment from 'moment';
import { CalendarOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const badgeColors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

const initialFormValues = {
	title: '',
	start: moment('00:00:00', 'HH:mm:ss'),
	end: moment('00:00:00', 'HH:mm:ss'),
	bullet: badgeColors[0]
}

export class CalendarApp extends Component {
	formRef = React.createRef();
	dateFormat = 'DD MMMM'
	state = {
		calendarList: CalendarData,
		modalVisible: false,
		selectedDate: null
	}

	dateCellRender = value => {
		const listData = this.getListData(value.format((this.dateFormat)));
		return (
			<ul className="calendar-event">
				{listData.map((item, i) => (
					<li key={`${item.title}-${i}`}>
						<Badge color={item.bullet} text={item.title}/>
					</li>
				))}
			</ul>
		);
	}

	getListData = (value) => {
		let listData = [];
		this.state.calendarList.forEach(elm => {
			if(elm.date === value) {
				listData = elm.event
			}
		})
		return listData;
	}

	onSelect = value => {
		const selectedDate = value.format((this.dateFormat))
		this.setState({
			modalVisible: true,
			selectedDate: selectedDate
    });
	}

	onAddEvent = values => {
		this.formRef.current.setFieldsValue(initialFormValues);
		const { calendarList, selectedDate } = this.state
		const data = [{
			title: values.title? values.title : 'Untitled Event',
			bullet: values.bullet,
			start: values.start.format(('HH:mm A')),
			end: values.end.format(('HH:mm A')),
		}]
		const newCalendarArr = calendarList
		const isExistingDate = newCalendarArr.find(x => x.date === selectedDate)
		if (isExistingDate) {
			for (let elm of newCalendarArr) { 
				if (elm.date === selectedDate) {
					elm.event = [...elm.event, ...data]
				}
			}
		} else {
			newCalendarArr.push({date: selectedDate, event: data})
		}
		const sortedNewCalendarArr  = newCalendarArr.sort((a,b) => moment(a.date) - moment(b.date))
		this.setState({
			modalVisible: false,
			calendarList: sortedNewCalendarArr
		})
	}

	onAddEventCancel = () => {
		this.setState({
      modalVisible: false,
    });
	}

	onDeleteEvent = (date, index) => {
		const { calendarList } = this.state
		const data = calendarList.map(calendarList => {
			if(calendarList.date === date) {
				calendarList.event = calendarList.event.filter( (_, i) => i !== index)
			}
			return calendarList
		}).filter(elm => elm.event.length !== 0)
		this.setState({
			calendarList: data
		})
	}

	addEventModal = () => (
		<Modal
			title="New Event"
			visible={this.state.modalVisible}
			footer={null}
			okText="Add"
			onCancel={this.onAddEventCancel}
		>
			<Form 
				ref={this.formRef}
				layout="vertical" 
				name="new-event" 
				onFinish={this.onAddEvent}
				initialValues={initialFormValues}
			>
				<Form.Item name="title" label="Title">
					<Input autoComplete="off" />
				</Form.Item>
				<Row gutter="16">
					<Col span={12} >
						<Form.Item name="start" label="Start">
							<TimePicker className="w-100" />
						</Form.Item>
					</Col>
					<Col span={12} >
						<Form.Item name="end" label="End">
							<TimePicker className="w-100" />
						</Form.Item>
					</Col>
				</Row>
				<Form.Item name="bullet" label="Label">
					<Select>
						{
							badgeColors.map(elm => (
								<Option value={elm} key={elm}>
									<Badge color={elm} />
									<span className="text-capitalize font-weight-semibold">{elm}</span>
								</Option>
							))
						}
					</Select>
				</Form.Item>
				<Form.Item className="text-right mb-0">
					<Button type="primary" htmlType="submit">
						Add Event
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)

	getAgenda = () => {
		const { calendarList } = this.state;
		return (
			calendarList.map(calendarList => (
				<div key={calendarList.date} className="calendar-list">
					<h4>
						<CalendarOutlined />
						<span className="ml-2">{calendarList.date}</span>
					</h4>
					{
						calendarList.event.map((eventItem, i) => (
							<div key={`${eventItem.title}-${i}`} className="calendar-list-item">
								<div className="d-flex">
									<Badge color={eventItem.bullet} />
									<div>
										<h5 className="mb-1">{eventItem.title}</h5>
										<span className="text-muted">{eventItem.start} - {eventItem.end}</span>
									</div>
								</div>
								<div className="calendar-list-item-delete">
									<Tooltip title="Delete event">
										<DeleteOutlined onClick={() => this.onDeleteEvent(calendarList.date, i)}/>
									</Tooltip>
								</div>
							</div>
						))
					}
				</div>
			))
		)
	}

	render() {
		return (
			<Card className="calendar mb-0">
				<Row>
					<Col xs={24} sm={24} md={9} lg={6}>
						<h2 className="mb-4">Agenda</h2>
						{this.getAgenda()}
					</Col>
					<Col xs={24} sm={24} md={15} lg={18}>
						<Calendar onSelect={this.onSelect} dateCellRender={this.dateCellRender}/>
					</Col>
				</Row>
				{this.addEventModal()}
			</Card>
		)
	}
}

export default CalendarApp
