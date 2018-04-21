import React, {Component} from 'react';
import {Card, CardSection, Input, Button, Spinner} from "../common";
import {Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, createEmployee} from './../../store/actions';


class EmployeeCreate extends Component {

    onButtonPress() {
        const {name, phone, day} = this.props;
        this.props.createEmployee({name, phone, day});

    }

    render() {
        return (<Card>
            <CardSection>
                <Input onChangeText={(text) => {
                    this.props.employeeUpdate({prop: 'name', value: text})
                }} label={'Name'} placeholder={'example'}
                       value={this.props.name}/>
            </CardSection>
            <CardSection>
                <Input label={'Phone'} onChangeText={(text) => {
                    this.props.employeeUpdate({prop: 'phone', value: text})
                }} placeholder={'555-555-555'} value={this.props.email}/>
            </CardSection>
            <CardSection style={{flexDirection: 'column'}}>
                <Text style={styles.pickerTextStyle}>Select shift</Text>
                <Picker style={{flex: 1}} selectedValue={this.props.day} onValueChange={(itemValue, itemIndex) => {
                    this.props.employeeUpdate({prop: 'day', value: itemValue})
                }}>
                    <Picker.Item label={'Monday'} value={'Monday'}/>
                    <Picker.Item label={'Tuesday'} value={'Tuesday'}/>
                    <Picker.Item label={'Wednesday'} value={'Wednesday'}/>
                    <Picker.Item label={'Thursday'} value={'Thursday'}/>
                    <Picker.Item label={'Friday'} value={'Friday'}/>
                    <Picker.Item label={'Saturday'} value={'Saturday'}/>
                    <Picker.Item label={'Sunday'} value={'Sunday'}/>
                </Picker>
            </CardSection>

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

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

export default connect(mapStateToProps, {employeeUpdate, createEmployee})(EmployeeCreate);