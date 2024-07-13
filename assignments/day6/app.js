import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Button } from 'react-native';
import styles from './styles';

const App = () => {
  const [page, setPage] = useState('gettingStarted');
  const [userDetails, setUserDetails] = useState({});
  const [form, setForm] = useState({ username: '', password: '', conpassword: '', email: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const handleSignUpChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleLoginChange = (name, value) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const signUp = () => {
    if (!form.username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!form.password || !form.conpassword) {
      Alert.alert('Error', 'Password and confirm password are required');
      return;
    }
    if (form.password !== form.conpassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    setUserDetails(form);
    setForm({ username: '', password: '', conpassword: '', email: '' });
    setPage('login');
  };

  const login = () => {
    if (!loginForm.username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!loginForm.password) {
      Alert.alert('Error', 'Password is required');
      return;
    }
    if (loginForm.username === userDetails.username && loginForm.password === userDetails.password) {
      setPage('welcome');
      Alert.alert('Logged in successfully!');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  const logout = () => {
    setPage('gettingStarted');
    setLoginForm({ username: '', password: '' });
  };

  return (
    <View style={styles.container}>
      {page === 'gettingStarted' && (
        <View style={styles.page}>
          <Text style={styles.title}>Getting Started</Text>
          <Button title="Get Started" onPress={() => setPage('signUp')} />
        </View>
      )}

      {page === 'signUp' && (
        <View style={styles.page}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={form.username}
            onChangeText={(value) => handleSignUpChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => handleSignUpChange('password', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={form.conpassword}
            onChangeText={(value) => handleSignUpChange('conpassword', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => handleSignUpChange('email', value)}
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={signUp}>
            <Text style={styles.buttonText}>Register yourself!</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 'login' && (
        <View style={styles.page}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={loginForm.username}
            onChangeText={(value) => handleLoginChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={loginForm.password}
            onChangeText={(value) => handleLoginChange('password', value)}
          />
          <Button title="Login" onPress={login} />
        </View>
      )}

      {page === 'welcome' && (
        <View style={styles.page}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.welcomeText}>Welcome to the app!</Text>
          <Button title="Logout" onPress={logout} />
        </View>
      )}
    </View>
  );
};


export default App;