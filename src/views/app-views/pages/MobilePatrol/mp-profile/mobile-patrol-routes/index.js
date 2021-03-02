import { CompassOutlined, DeleteOutlined, InboxOutlined, PhoneOutlined, InteractionOutlined, SwapOutlined } from '@ant-design/icons';
import { Table } from "ant-table-extensions";
import { Button, Card, Col, Form, Input, Row, Select, Steps, Switch, Tooltip } from 'antd';
import { AppStyles } from "assets/styles";
import { AppColors } from 'assets/styles/colors';
import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { componentStyles } from "./../../styles";
import EditPatrolRoute from "./EditPatrolRoute";

const mobilePatrolData = [
    {
        "id": "1",
        "mpSiteName": "Branch 1",
        "status": "Active",
        "mpRouteName": "ABC",
        "checkPointName": "Read Wall",
        "description": "Description...."
    },
]



const { Option } = Select;
const { Step } = Steps;
const rules = []
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    color: isDragging ? AppColors.mineShaft : AppColors.mineShaft,
    // change background colour if dragging
    background: isDragging ? AppColors.alabaster2 : AppColors.gallery1,

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightgrey' : 'white',
    padding: grid,
    borderColor: AppColors.gallery1,
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 10,
    width: '100%',
    height: 300,
    marginBottom: 20
});
export class MobilePatrolRoutes extends Component {

    state = {
        mobilePatrolList: mobilePatrolData,
        currStatus: 'active',
        search: {
            status: "",
            createDate: "",
            mpSiteName: "",
            edit: false,
            form: false,
            address: '',
            selectionType: ""
        },
        items: [
            { id: "item-0", content: "MP Site A" },
            { id: "item-1", content: "MP Site B" },
            { id: "item-2", content: "MP Site C" },
            { id: "item-3", content: "MP Site D" }
        ],
        selected: [],
        step: ""

    }

    handleChange = (type, value) => {
        // console.log(`selected ${value}`, type);
        const { search } = this.state;
        this.setState({
            search: {
                ...search,
                [type]: value
            }
        })

    }

    handleChangeInput = (type, event) => {
        console.log(`selected ${event.target.value}`);
        const { search } = this.state;
        this.setState({
            search: {
                ...search,
                [type]: event.target.value
            }
        })

    }

    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };


    render() {
        const { mobilePatrolList, edit, form, currStatus, items, selected, step } = this.state;
        const { address } = this.state.search

        const tableColumns = [


            {
                title: 'MP Route Name',
                dataIndex: 'mpRouteName',
                render: (_, record) => (
                    <span className="d-flex">
                        <a onClick={() => this.setState({ edit: true })}>

                            {record.mpRouteName}
                        </a>
                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.mpRouteName.toLowerCase();
                        b = b.mpRouteName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
                fixed: 'left'

            },

            {
                title: 'MP Site Name',
                dataIndex: 'mpSiteName',
                render: (_, record) => (
                    <span className="d-flex">

                        {record.mpSiteName}

                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.mpSiteName.toLowerCase();
                        b = b.mpSiteName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
            },

            {
                title: 'Checkpoint Name',
                dataIndex: 'checkPointName',
                render: (_, record) => (
                    <span className="d-flex">
                        {record.checkPointName}
                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.checkPointName.toLowerCase();
                        b = b.checkPointName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
            },

            {
                title: 'Description',
                dataIndex: 'description',
                render: (_, record) => (
                    <span className="d-flex">
                        {record.description}
                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.description.toLowerCase();
                        b = b.description.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
            },

            {
                title: 'Status',
                dataIndex: 'status',
                render: () => {
                    return (
                        <Button onClick={() => {
                            if (currStatus == "active") {
                                this.setState({ currStatus: "inactive" })
                            }
                            else if (currStatus == "inactive") {
                                this.setState({ currStatus: "active" })
                            }
                        }}
                            style={{ color: currStatus === 'active' ? 'lightgreen' : 'red', borderColor: currStatus === 'active' ? 'lightgreen' : 'red' }} className="text-capitalize" color={currStatus === 'active' ? 'cyan' : 'red'}>{currStatus}</Button>
                    )
                },
                sorter: {
                    compare: (a, b) => a.status.length - b.status.length,
                },
                width: 120
            },

            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">

                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined />}
                                // onClick={() => { this.deleteUser(elm.id) }} 
                                size="small" />
                        </Tooltip>
                    </div>
                )
            }
        ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        console.log(address)
        return (
            <div style={AppStyles.marginTop50}>
                <Row gutter={16} justify="center">

                    {
                        edit ?
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <EditPatrolRoute onSaveRoute={() => { this.setState({ edit: false }) }} />
                            </Col>
                            :
                            form ?
                                <>
                                    <Col xs={24} sm={24} md={24} lg={24} >
                                        <Form layout="vertical">
                                            <Row gutter={16}>
                                                <Col xs={24} sm={24} md={24} lg={24} >
                                                    <div style={AppStyles.marginBottom40}>
                                                        <div style={AppStyles.horizontallLineWidth100}>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col xs={24} sm={24} md={6} lg={6}>
                                                    <Form.Item
                                                        name="routeName"
                                                        label="Route Name"
                                                        hasFeedback
                                                    >
                                                        <Input style={componentStyles.borderColor} />
                                                    </Form.Item>
                                                </Col>


                                                <Col xs={24} sm={24} md={6} lg={6}>
                                                    <Form.Item
                                                        name="address"
                                                        label="Mobile Patrol Start From"
                                                        // rules={rules.storeLocation}
                                                        hasFeedback
                                                    >
                                                        <Select
                                                            showSearch
                                                            style={componentStyles.selectStyle}
                                                            bordered={false}
                                                            placeholder="Address"
                                                            optionFilterProp="children"
                                                            onChange={(val) => this.handleChange("address", val)}
                                                            // onFocus={onFocus}
                                                            // onBlur={onBlur}
                                                            // onSearch={onSearch}
                                                            filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >
                                                            <Option value="companyAddress">Company Address</Option>
                                                            <Option value="customAddress">Custom Address</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </Col>
                                                {address === "customAddress" ?
                                                    <>
                                                        {console.log("address =======>", address)}
                                                        <Col xs={24} sm={24} md={6} lg={6}>
                                                            <Form.Item
                                                                name="address1"
                                                                label="Address Line 1"
                                                                rules={rules.address1}
                                                                hasFeedback
                                                            >
                                                                <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={6} lg={6}>
                                                            <Form.Item
                                                                name="address2"
                                                                label="Address Line 2"
                                                                rules={rules.address1}
                                                                hasFeedback
                                                            >
                                                                <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={6} lg={6}>
                                                            <Form.Item
                                                                name="postcode"
                                                                label="Post Code"
                                                                rules={rules.postcode}
                                                                hasFeedback
                                                            >
                                                                <Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={6} lg={6}>
                                                            <Form.Item
                                                                name="phone"
                                                                label="Phone"
                                                                rules={rules.phone}
                                                                hasFeedback
                                                            >
                                                                <Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
                                                            </Form.Item>
                                                        </Col>
                                                    </> : null
                                                }

                                                <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop40}>


                                                    <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
	                                        Status
                                            </Col>

                                            </Row>
                                            <Row justify="center" style={componentStyles.dragAndDropContainer}>
                                                <Col xs={16} sm={16} md={16} lg={16}>
                                                    <DragDropContext onDragEnd={this.onDragEnd}>
                                                        <Row gutter={16}>
                                                            <Col className="card" xs={10} sm={10} md={10} lg={10} style={AppStyles.borderGallery2}>

                                                                <div style={componentStyles.dragTitle}>Mobile Patrol Sites</div>
                                                                <div style={AppStyles.marginBottom20}>
                                                                    <div style={AppStyles.horizontallLineWidth100}>
                                                                    </div>
                                                                </div>
                                                                <Droppable droppableId="droppable">
                                                                    {(provided, snapshot) => (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            style={getListStyle(snapshot.isDraggingOver)}
                                                                        >

                                                                            {this.state.items.map((item, index) => (
                                                                                <Draggable
                                                                                    key={item.id}
                                                                                    draggableId={item.id}
                                                                                    index={index}>
                                                                                    {(provided, snapshot) => (
                                                                                        <div
                                                                                            ref={provided.innerRef}
                                                                                            {...provided.draggableProps}
                                                                                            {...provided.dragHandleProps}
                                                                                            style={getItemStyle(
                                                                                                snapshot.isDragging,
                                                                                                provided.draggableProps.style
                                                                                            )}>
                                                                                            <Row>
                                                                                                <Col xs={12} sm={12} md={12} lg={12} >
                                                                                                    <div>
                                                                                                        {item.content}
                                                                                                    </div>

                                                                                                </Col>
                                                                                                <Col xs={12} sm={12} md={12} lg={12} style={AppStyles.textAlignRight}>
                                                                                                    <InteractionOutlined style={{ fontSize: 20, color: 'lightgrey' }} />

                                                                                                </Col>
                                                                                            </Row>
                                                                                        </div>
                                                                                    )}
                                                                                </Draggable>
                                                                            ))}
                                                                            {provided.placeholder}
                                                                        </div>
                                                                    )}
                                                                </Droppable>
                                                            </Col>
                                                            <Col xs={4} sm={4} md={4} lg={4} style={AppStyles.alignSelfAndTextCenter}>
                                                                <SwapOutlined style={{ fontSize: 50, color: 'lightgrey' }} />
                                                            </Col>
                                                            <Col className="card" xs={10} sm={10} md={10} lg={10} style={AppStyles.borderGallery2}>

                                                                <div style={componentStyles.dragTitle}>Mobile Patrol Route</div>
                                                                <div style={AppStyles.marginBottom20}>
                                                                    <div style={AppStyles.horizontallLineWidth100}>
                                                                    </div>
                                                                </div>

                                                                <Droppable droppableId="droppable2">
                                                                    {(provided, snapshot) => (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            style={getListStyle(snapshot.isDraggingOver)}
                                                                        >

                                                                            {this.state.selected.map((item, index) => (
                                                                                <Draggable
                                                                                    key={item.id}
                                                                                    draggableId={item.id}
                                                                                    index={index}>
                                                                                    {(provided, snapshot) => (
                                                                                        <div
                                                                                            ref={provided.innerRef}
                                                                                            {...provided.draggableProps}
                                                                                            {...provided.dragHandleProps}
                                                                                            style={getItemStyle(
                                                                                                snapshot.isDragging,
                                                                                                provided.draggableProps.style
                                                                                            )}>
                                                                                            <Row>
                                                                                                <Col xs={12} sm={12} md={12} lg={12} >
                                                                                                    <div>
                                                                                                        {item.content}
                                                                                                    </div>

                                                                                                </Col>
                                                                                                <Col xs={12} sm={12} md={12} lg={12} style={AppStyles.textAlignRight}>
                                                                                                    <InteractionOutlined style={{ fontSize: 20, color: 'lightgrey' }} />

                                                                                                </Col>
                                                                                            </Row>                                                                </div>
                                                                                    )}
                                                                                </Draggable>
                                                                            ))}
                                                                            {provided.placeholder}
                                                                        </div>
                                                                    )}
                                                                </Droppable>

                                                            </Col>
                                                        </Row>

                                                    </DragDropContext>
                                                </Col>
                                                <Col xs={8} sm={8} md={8} lg={8}>
                                                    {/* //Staaaaart Step */}
                                                    <Steps current={items?.length} style={{ marginLeft: 100, margin: 40, marginTop: 100, display: items[0]?.content ? '' : 'none' }}>
                                                        <Step title="Start"

                                                            style={AppStyles.pointer}
                                                            // onClick={() => this.setState({ step: "Start" })}
                                                            icon={
                                                                <div style={'Start' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                </div>
                                                            } />
                                                        <Step title={items?.length && items[0]?.content}
                                                            style={AppStyles.pointer, { display: items[0]?.content !== undefined ? '' : 'none', marginRight: 30 }}
                                                            // onClick={() => this.setState({ step: "Second Step" })}

                                                            icon={
                                                                <div style={'Second Step' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                    2
                                                                </div>
                                                            } />
                                                    </Steps>
                                                    {/* //Secooooooond Step */}
                                                    <Steps current={items?.length} style={{ marginLeft: 100, margin: 40, display: items[1]?.content ? '' : 'none' }}>
                                                        <Step title="Start"

                                                            style={AppStyles.pointer}
                                                            // onClick={() => this.setState({ step: "Start" })}
                                                            icon={
                                                                <div style={'Start' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                </div>
                                                            } />
                                                        <Step title={items?.length && items[1]?.content}
                                                            style={AppStyles.pointer, { display: items[1]?.content !== undefined ? '' : 'none', marginRight: 30 }}
                                                            // onClick={() => this.setState({ step: "Second Step" })}

                                                            icon={
                                                                <div style={'Second Step' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                    2
                                                                </div>
                                                            } />
                                                    </Steps>
                                                    {/* //third Step */}
                                                    <Steps current={items?.length} style={{ marginLeft: 100, margin: 40, display: items[2]?.content ? '' : 'none' }}>
                                                        <Step title="Start"

                                                            style={AppStyles.pointer}
                                                            // onClick={() => this.setState({ step: "Start" })}
                                                            icon={
                                                                <div style={'Start' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                </div>
                                                            } />
                                                        <Step title={items?.length && items[2]?.content}
                                                            style={AppStyles.pointer, { display: items[2]?.content !== undefined ? '' : 'none', marginRight: 30 }}
                                                            // onClick={() => this.setState({ step: "Second Step" })}

                                                            icon={
                                                                <div style={'Second Step' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                    2
                                                                </div>
                                                            } />
                                                    </Steps>
                                                    {/* //Fooooooooorth Step */}
                                                    <Steps current={items?.length} style={{ marginLeft: 100, margin: 40, display: items[3]?.content ? '' : 'none' }}>
                                                        <Step title="Start"

                                                            style={AppStyles.pointer}
                                                            // onClick={() => this.setState({ step: "Start" })}
                                                            icon={
                                                                <div style={'Start' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                </div>
                                                            } />
                                                        <Step title={items?.length && items[3]?.content}
                                                            style={AppStyles.pointer, { display: items[3]?.content !== undefined ? '' : 'none', marginRight: 30 }}
                                                            // onClick={() => this.setState({ step: "Second Step" })}

                                                            icon={
                                                                <div style={'Second Step' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                    2
                                                                </div>
                                                            } />
                                                    </Steps>
                                                </Col>
                                                <Col xs={20} sm={20} md={20} lg={20} style={AppStyles.marginTopBottom50}>
                                                    <Steps current={selected?.length + 1}>
                                                        <Step title="Start"

                                                            style={AppStyles.pointer}
                                                            // onClick={() => this.setState({ step: "Start" })}
                                                            icon={
                                                                <div style={'Start' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                </div>
                                                            } />
                                                        <Step title={selected?.length && selected[0]?.content} 
                                                        description="8 Miles"
                                                            style={AppStyles.pointer, { display: selected[0]?.content !== undefined ? '' : 'none' }}
                                                            // onClick={() => this.setState({ step: "Second Step" })}

                                                            icon={
                                                                <div style={'Second Step' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                    2
                                                                </div>
                                                            } />
                                                        <Step title={selected?.length && selected[1]?.content}
                                                            style={AppStyles.pointer, { display: selected[1]?.content !== undefined ? '' : 'none' }}
                                                            // onClick={() => this.setState({ step: "Finish" })}
                                                            description="24 Miles"
                                                            icon={
                                                                <div style={'Finish' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                    3
                                                                </div>
                                                            } />
                                                        <Step title={selected?.length && selected[2]?.content}
                                                        description="69 Miles"
                                                            style={AppStyles.pointer, { display: selected[2]?.content !== undefined ? '' : 'none' }}
                                                            // onClick={() => this.setState({ step: "Finish" })}

                                                            icon={
                                                                <div style={'Finish' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                    4
                                                                </div>
                                                            } />
                                                        {
                                                            selected[3]?.content !== undefined
                                                                ?

                                                                <Step title={selected?.length && selected[3]?.content}
                                                                description="10 Miles"
                                                                    style={AppStyles.pointer, { display: selected[3]?.content !== undefined ? '' : 'none' }}
                                                                    // onClick={() => this.setState({ step: "Finish" })}

                                                                    icon={
                                                                        <div style={'Finish' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                            5
                                                                        </div>
                                                                    } />
                                                                :
                                                                null
                                                        }
                                                        <Step status="finish" title="Finish"
                                                            style={AppStyles.pointer}
                                                            // onClick={() => this.setState({ step: "Finish" })}

                                                            icon={
                                                                <div style={'Finish' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
                                                                </div>
                                                            } />

                                                    </Steps>
                                                </Col>
                                            </Row>
                                            <Row gutter={16} justify="center">

                                                <Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop20}>

                                                    <Form.Item>
                                                        <Button
                                                            onClick={() => this.setState({ form: false })}
                                                            style={componentStyles.continueButton} htmlType="submit" block>
                                                            Add Route
                                            </Button>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Form>

                                        {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
                                    </Col>



                                </> :
                                <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
                                    <Card className="card" title="Mobile Patrol Routes" extra={
                                        <Row gutter={16}>
                                            <Col xs={24} sm={24} md={24} lg={24}>

                                                <Button
                                                    onClick={() => this.setState({ form: true })}
                                                    style={componentStyles.continueButton} htmlType="submit" block>
                                                    Add Mobile Patrol Routes
                                        </Button>

                                            </Col>
                                        </Row>
                                    } >
                                        <Table
                                            // rowSelection={{
                                            //     type: selectionType,
                                            //     ...rowSelection,
                                            // }}
                                            searchable bordered columns={tableColumns} dataSource={mobilePatrolList} scroll={{ x: 800, y: 300 }} />
                                    </Card>
                                </Col>

                    }

                </Row>

                {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
            </div>
        )
    }
}

export default MobilePatrolRoutes

