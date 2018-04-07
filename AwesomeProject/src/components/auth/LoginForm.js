import React, {Component} from 'react';
import {Card, CardSection, Button, Input, Spinner} from "../common";
import firebase from 'firebase';
import {Text} from "react-native";
import {Actions} from 'react-native-router-flux';

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };


    loginAction() {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
            this.onLoginSuccess().bind(this);
        }).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
                this.onLoginSuccess().bind(this);
            }).catch(() => {
                this.onLoginFail.bind(this);
            });
        });
    }


    onLoginSuccess() {
        this.setState({loading: false, email: '', password: '', error: ''});
        Actions.home();
    }

    onLoginFail() {
        this.setState({loading: false, error: 'Authentication Fail'});
    }


    renderButton() {
        if (this.state.loading)
            return <Spinner size={'small'}/>;
        else
            return (<Button onPressCustom={this.loginAction.bind(this)}>
                Log In
            </Button>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input placeholder={'example@gmail.com'}
                           label={'Email'}
                           value={this.state.email}
                           onChangeText={(email) => {
                               this.setState({email});
                           }}/>
                </CardSection>

                <CardSection>
                    <Input placeholder={'password'}
                           label={'Password'}
                           secure={true}
                           value={this.state.password}
                           onChangeText={(password) => {
                               this.setState({password});
                           }}/>
                </CardSection>

                <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
