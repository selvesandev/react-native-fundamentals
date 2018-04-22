import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import {Modal} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Button, Confirm} from "../common";
import {employeeUpdate, employeeSave, employeeDelete} from "../../store/actions/EmployeeActions";
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    state = {showModal: false};

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, day} = this.props;
        this.props.employeeSave({name, phone, day, uid: this.props.employee.uid});
    }

    onTextPress() {
        const {phone, day} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${day}`);
    }

    onAccept() {
        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPressCustom={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPressCustom={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPressCustom={() => {
                        this.setState({showModal: !this.state.showModal})
                    }}>Fire</Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </Confirm>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, day} = state.employeeForm;
    return {
        name, phone, day
    }
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit)