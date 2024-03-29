import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import SignUpForm from "../../components/SignUpForm";
//import ContractNumberForm from "../../components/ContractNumberForm";

import { Row, Col } from "antd";

const { requestSignIn, requestSignUp } = userActions;

class SignUpPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isContractNumber: false
		};

		this.onFinishInputContractNumber = this.onFinishInputContractNumber.bind(this);
	}

	componentDidMount() {}

	onFinishInputContractNumber() {
		this.setState({ isContractNumber: true });
	}

	handleSubmit = values => {
		this.props.requestSignUp(values);
	};

	render() {
		//const { isContractNumber } = this.state;

		return (
			<Row type='flex' justify='center' align='middle' style={{ height: "100%" }}>
				<Col xs={20} sm={16} md={14} lg={10} xl={8} xxl={7}>
					{/* {!isContractNumber && <ContractNumberForm temp={this.onFinishInputContractNumber} />} */}
					<SignUpForm handleSubmit={this.handleSubmit} />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.authentication
});

const mapDispatchToProps = dispatch => {
	return {
		requestSignUp: payload => dispatch(requestSignUp(payload))
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(SignUpPage);
