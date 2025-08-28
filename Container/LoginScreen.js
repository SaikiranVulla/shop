import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postUsers } from "../Redux/Actions/AuthActions";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState(); // from FakeStore API docs
  const [password, setPassword] = useState();   // from FakeStore API docs

  const dispatch = useDispatch();
  const { isLoading, error, userToken } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(postUsers({ username, password }))
      .then(() => {
        console.log(userToken,"userToken")
        // navigation.replace("Home"); // redirect on success
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      {isLoading && <Text>Loading...</Text>}
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
