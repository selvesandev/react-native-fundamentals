import React, {Component} from 'react';
import {Card, CardSection, Input, Button, Spinner} from "../common";
import {connect} from "react-redux";
import {emailChanged, passwordChanged, loginUser} from './../../store/actions';
import {View, Text} from "react-native";

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(password) {
        this.props.passwordChanged(password);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading)
            return <Spinner size={'large'}/>;

        return <Button onPressCustom={this.onButtonPress.bind(this)}>Login</Button>;
    }

    renderError() {
        if (this.props.error) {
            return <View>
                <Text style={styles.errorTextStyles}>{this.props.error}</Text>
            </View>
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input value={this.props.email}
                           keyboardType={'email-address'}
                           label={'Email'}
                           onChangeText={this.onEmailChange.bind(this)}
                           placeholder={'email@gmail.com'}/>
                </CardSection>
                <CardSection>
                    <Input value={this.props.password}
                           label={'Password'}
                           onChangeText={this.onPasswordChange.bind(this)}
                           placeholder={'password'} secure/>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);


const styles = {
    errorTextStyles: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red'
    }
};