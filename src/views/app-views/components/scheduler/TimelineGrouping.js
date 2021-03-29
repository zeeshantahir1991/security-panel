import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';
/**
 * schedule timeline resource grouping sample
 */
export class TimelineGrouping extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = extend([], dataSource.resourceData.concat(dataSource.timelineResourceData), null, true);
        this.projectData = [
            { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
            // { text: 'PROJECT 2', id: 2, color: '#56ca85' },
            // { text: 'PROJECT 3', id: 3, color: '#df5286' }
        ];
        this.categoryData = [
            { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
            { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
            { text: 'Megan', id: 3, groupId: 1, color: '#c603fc' },
            { text: 'Darwin', id: 4, groupId: 1, color: '#03fce7' },
            { text: 'John', id: 5, groupId: 1, color: '#fcba03' },
            // { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
            // { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
            // { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
            // { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
        ];
    }
    render() {
        return (<div className='schedule-control-section'>
                <div className='col-lg-12 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent cssClass='timeline-resource-grouping' width='100%' height='650px' selectedDate={new Date(2018, 3, 4)} currentView='TimelineWeek' eventSettings={{
            dataSource: this.data
        }} group={{ resources: ['Projects', 'Categories'] }}>
                            <ResourcesDirective>
                                {/* <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false} dataSource={this.projectData} textField='text' idField='id' colorField='color'>
                                </ResourceDirective> */}
                                <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true} dataSource={this.categoryData} textField='text' idField='id' groupIDField='groupId' colorField='color'>
                                </ResourceDirective>
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='TimelineDay' displayName="By Day"/>
                                <ViewDirective option='TimelineWeek' timeScale={{ enable: false }} displayName="By 1 Week"/>
                                <ViewDirective option='TimelineWeek' timeScale={{ enable: false }} displayName="By 2 Weeks" interval="2"/>
                                <ViewDirective option='TimelineWeek' timeScale={{ enable: false }} displayName="By 4 Weeks" interval="4"/>
                                {/* <ViewDirective option='WorkWeek'/> */}
                                <ViewDirective option='TimelineMonth' displayName="By 1 month"/>
                                <ViewDirective option='TimelineMonth' displayName="By 3 months" interval="3"/>
                                {/* <ViewDirective option='Agenda'/> */}
                            </ViewsDirective>
                            <Inject services={[TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop]}/>
                        </ScheduleComponent>
                    </div>
                </div>
            </div>);
    }
}

// render(<TimelineGrouping />, document.getElementById('sample'));