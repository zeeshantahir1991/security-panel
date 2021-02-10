import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, message, Row, Upload } from 'antd';
import Flex from 'components/shared-components/Flex';
import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { AuthFooter } from "./../../components/AuthFooter";
import { AuthHeader } from "./../../components/AuthHeader";

const backgroundStyle = {
	// backgroundImage: 'url(/img/others/img-17.jpg)',
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover'
	// backgroundColor: '#60b0f4'
}

export class RegisterOne extends React.Component {
	avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

	state = {
		avatarUrl: '/img/avatars/thumb-6.jpg',
		// name: 'Charlie Howard',
		// email: 'charlie.howard@themenate.com',
		// userName: 'Charlie',
		// dateOfBirth: null,
		// phoneNumber: '+44 (1532) 135 7921',
		// website: '',
		// address: '',
		// city: '',
		// postcode: ''
	}

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {
		let props = this.props;
		const { avatarUrl } = this.state;



		const onUploadAavater = info => {
			const key = 'updatable';
			if (info.file.status === 'uploading') {
				message.loading({ content: 'Uploading...', key, duration: 1000 });
				return;
			}
			if (info.file.status === 'done') {
				this.getBase64(info.file.originFileObj, imageUrl =>
					this.setState({
						avatarUrl: imageUrl,
					}),
				);
				message.success({ content: 'Uploaded!', key, duration: 1.5 });
			}
		};

		const onRemoveAvater = () => {
			this.setState({
				avatarUrl: ''
			})
		}

		return (
			<div style={backgroundStyle}>
				<AuthHeader />
				<div className="container d-flex flex-column justify-content-center">
					<Row justify="center" style={{ paddingTop: 100, paddingBottom: 100 }}>
						<Col xs={20} sm={20} md={20} lg={20}>

							{/* <div className="my-2"> */}
							<div className="text-center">
								{/* <img style={{ height: 70, width: 200 }} className="img-fluid" src="/img/logo1.png" alt="" /> */}
								<h1 className="text-bold">Registration Form</h1>
							</div>
							{/* <Row justify="center" style={{ marginBottom: 25, marginTop: 25 }}>

								<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
									<Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
									<div className="ml-md-3 mt-md-0 mt-3">
										<Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
											<Button type="primary">Change</Button>
										</Upload>
										<Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
									</div>
								</Flex>
							</Row> */}
							<Row justify="center">
								<Col xs={24} sm={24} md={20} lg={20}>
									<RegisterForm {...props} />
								</Col>
							</Row>
							{/* </div> */}

						</Col>
					</Row>
				</div>
				<AuthFooter />
			</div>
		)
	}
}

export default RegisterOne
