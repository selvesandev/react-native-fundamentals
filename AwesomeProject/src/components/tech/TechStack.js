import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class TechStack extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    render() {
        return (<ListView dataSource={this.dataSource} renderRow={this.renderRow}/>);
    }

    renderRow(library) {
        return <ListItem library={library}/>
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
};

export default connect(mapStateToProps)(TechStack)