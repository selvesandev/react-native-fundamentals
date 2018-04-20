import React, {Component} from 'react';
// import {Card, CardSection, Button, Input, Spinner} from './../common';
// import {connect} from 'react-redux';
// import {emailChanged, passwordChanged, loginUser} from "../../store/actions/index";
import {Text, View} from "react-native";

class LoginForm extends Component {
    // onEmailChange(text) {
    //     this.props.emailChanged(text);
    // }
    //
    // onPasswordChange(text) {
    //     this.props.passwordChanged(text);
    // }
    //
    // onButtonPress() {
    //     const {email, password} = this.props;
    //     this.props.loginUser({email, password});
    // }
    //
    // renderError() {
    //     if (this.props.error) {
    //         return <View style={{backgroundColor: 'white'}}>
    //             <Text style={styles.errorTextStyles}>{this.props.error}</Text>
    //         </View>
    //     }
    // }
    //
    // renderButton() {
    //     if (this.props.loading)
    //         return <Spinner size={'large'}/>;
    //
    //     return <Button onPressCustom={this.onButtonPress.bind(this)}>Login</Button>;
    // }


    render() {
        // return (<Card>
        //     <CardSection>
        //         <Input value={this.props.email} onChangeText={this.onEmailChange.bind(this)}
        //                keyboardType={'email-address'} label={'Email'}
        //                placeholder={'email@gmail.com'}/>
        //     </CardSection>
        //     <CardSection>
        //         <Input value={this.props.password} onChangeText={this.onPasswordChange.bind(this)} label={'Password'}
        //                placeholder={'password'}
        //                secure/>
        //     </CardSection>
        //     {this.renderError()}
        //     <CardSection>
        //         {this.renderButton()}
        //     </CardSection>
        // </Card>);
        return (
            <Text style={{color: 'red'}}>TEST FROM LOGIN FORM</Text>
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


// export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
export default LoginForm;

const styles = {
    errorTextStyles: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red'
    }
};