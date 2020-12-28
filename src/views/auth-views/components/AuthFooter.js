import { Col, Row } from 'antd';
import React from 'react';



export class AuthFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // collapsed: false
        };
    }
  
    render() {


        return (
            <>
                <Row style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: '#737373' }}>
					<Col xs={0} sm={0} md={12} lg={12} style={{ marginTop: 50, marginBottom: 50 }}>
						<span style={{ color: 'white' }}>
							Email : sales@guardspur.com <br />
						Tel  : +344 2935 9363 <br />
						WhatsApp: +34333911347 <br /> <br />
						© Guardspur 2020 All Rights Reserved
					</span>
					</Col>
					<Col xs={0} sm={0} md={12} lg={12} style={{ marginTop: 50, marginBottom: 50, alignSelf: 'center' }}>
						<img style={{ width: 50, height: 50 }} src={'/img/facebook.png'} alt={`facebook`} />
						<img style={{ width: 50, height: 50, marginLeft: 50 }} src={'/img/linkedin.png'} alt={`linkedin`} />
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: '#737373' }}>
					<Col xs={10} sm={10} md={0} lg={0} style={{ marginTop: 50, marginBottom: 50 }}>
						<span style={{ color: 'white', fontSize: 10 }}>
							Email : sales@guardspur.com <br />
						Tel  : +344 2935 9363 <br />
						WhatsApp: +34333911347 <br /> <br />
						© Guardspur 2020 All Rights Reserved
					</span>
					</Col>
					<Col xs={10} sm={10} md={0} lg={0} style={{ marginTop: 50, marginBottom: 50, alignSelf: 'center' }}>
						<img style={{ width: 25, height: 25 }} src={'/img/facebook.png'} alt={`facebook`} />
						<img style={{ width: 25, height: 25, marginLeft: 25 }} src={'/img/linkedin.png'} alt={`linkedin`} />
					</Col>
				</Row>
			
            </>
        )
    }
}

