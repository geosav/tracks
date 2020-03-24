import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';


const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                sumbitButtonText="Sign In"
                onSubmit={({ email, password }) => signin({ email, password })}
            />

            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead!"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
