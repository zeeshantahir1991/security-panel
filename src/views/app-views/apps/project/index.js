import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import ProjectList from './project-list/ProjectList';
import Scrumboard from './scrumboard/Scrumboard';

export class Project extends Component {
	render() {
		const { match } = this.props
		return (
			<Switch>
				<Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
				<Route path={`${match.url}/list`} component={ProjectList} />
				<Route path={`${match.url}/scrumboard`} component={Scrumboard} />
			</Switch>
		)
	}
}

export default Project
