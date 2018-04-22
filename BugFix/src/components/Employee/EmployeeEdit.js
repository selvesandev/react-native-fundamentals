import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from "../common";
import {employeeUpdate, employeeSave} from "../../store/actions/EmployeeActions";
import _ from 'lodash';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, day} = this.props;
        this.props.employeeSave({name, phone, day, uid: this.props.employee.uid});
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

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit)