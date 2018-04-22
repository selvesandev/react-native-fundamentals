import React, {Component} from 'react';
import {Card, CardSection, Button} from "../common";
import {connect} from 'react-redux';
import {employeeUpdate, createEmployee} from './../../store/actions';
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
    onButtonPress() {
        const {name, phone, day} = this.props;
        this.props.createEmployee({name, phone, day});
    }

    render() {
        return (<Card>
            <EmployeeForm {...this.props}/>
            <CardSection>
                <Button onPressCustom={this.onButtonPress.bind(this)}>Create</Button>
            </CardSection>
        </Card>);
    }
}

const mapStateToProps = (state) => {
    const {name, phone, day} = state.employeeForm;
    return {
        name, phone, day
    }
};


export default connect(mapStateToProps, {employeeUpdate, createEmployee})(EmployeeCreate);