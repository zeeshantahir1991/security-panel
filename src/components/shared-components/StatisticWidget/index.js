import React from 'react'
import { Card } from 'antd';
import PropTypes from "prop-types";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { AppColors } from 'assets/styles/colors';
import { AppStyles } from 'assets/styles';

const StatisticWidget = ({ title, value, status, subtitle, prefix }) => {
	return (
		<Card>
			{title && <h4 className="mb-0">{title}</h4>}
			<div className={`${prefix ? 'd-flex' : ''} ${title ? 'mt-3' : ''}`}>
				{prefix ? <div className="mr-2">{prefix}</div> : null}
				<div>
					<div className="" style={AppStyles.flexDirectionRow}>
						<div style={{ flex: 1 }}>
							<img style={{ height: 50, width: 50 }} src={'/img/bar-graph.png'} alt={`stats`} />
						</div>
						<div style={{ alignSelf: 'center' }}>
							<h1 className=" font-weight-bold" style={{ color: AppColors.cornFlowerBlue }}>{value}</h1>
						</div>
						{
							status ?
								<span className={`font-size-md font-weight-bold ml-3 ${status !== 0 && status > 0 ? 'text-success' : 'text-danger'}`} >
									{status}
									{status !== 0 && status > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
								</span>
								:
								null
						}
					</div>
					{subtitle && <div className="text-gray-light mt-1">{subtitle}</div>}
				</div>
			</div>
		</Card>
	)
}

StatisticWidget.propTypes = {
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	value: PropTypes.string,
	subtitle: PropTypes.string,
	status: PropTypes.number,
	prefix: PropTypes.element
};

export default StatisticWidget