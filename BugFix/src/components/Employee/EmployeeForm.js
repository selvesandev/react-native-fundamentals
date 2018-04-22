import React, {Component} from 'react';
import {View, Text, Picker} from "react-native";
import {CardSection, Input} from "../common";
import {connect} from 'react-redux';
import {employeeUpdate} from './../../store/actions';


class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input onChangeText={(text) => {
                        this.props.employeeUpdate({prop: 'name', value: text})
                    }} label={'Name'} placeholder={'example'}
                           value={this.props.name}/>
                </CardSection>
                <CardSection>
                    <Input label={'Phone'} onChangeText={(text) => {
                        this.props.employeeUpdate({prop: 'phone', value: text})
                    }} placeholder={'555-555-555'} value={this.props.phone}/>
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
            </View>
        )
    }
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};
const mapStateToProps = (state) => {
    const {name, phone, day} = state.employeeForm;
    return {
        name, phone, day
    }
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);