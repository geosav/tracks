import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';


const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                sumbitButtonText="Sign Up"
                onSubmit={({ email, password }) => signup({ email, password })}
            />

            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 250,
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignupScreen;
