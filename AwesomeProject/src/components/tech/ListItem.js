import React, {Component} from 'react';
import {CardSection} from "../common";
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform} from "react-native";
import {connect} from 'react-redux';
import * as actions from './../../store/actions';

class ListItem extends Component {
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {expanded, library} = this.props;
        if (expanded) {
            return <Text style={styles.slidingStyle}>{library.description}</Text>;
        }
    }


    render() {
        const {title, id} = this.props.library;
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.props.selectLibrary(id);
            }}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded}
};

export default connect(mapStateToProps, actions)(ListItem);

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5
    },
    slidingStyle: {
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        backgroundColor: '#eee'
    }
};

