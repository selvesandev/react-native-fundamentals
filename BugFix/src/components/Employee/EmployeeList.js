import _ from 'lodash';
import React, {Component} from 'react';
import {ListView, Text} from 'react-native';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import {employeeFetch} from './../../store/actions';


class EmployeeList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    renderRow(employee) {
        return <ListItem employee={employee}/>
    }

    render() {
        return (
            <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow}/>
        )
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component
        //will be rendered with
        //this.props is still the old set of props
        //we have the access to both set of props inside the component will receive props.
        this.createDataSource(nextProps);
    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees)
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return {
            ...val, uid
        }
    });
    return {
        employees
    }
};


export default connect(mapStateToProps, {employeeFetch})(EmployeeList);