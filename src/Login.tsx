import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
  import React, { useState } from 'react'

export default function Login({navigation}: {navigation: any}) {

  // States
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState(false)

  const onHandleSubmit = async () => {

    if(email.trim().length == 0 || senha.trim().length == 0)
    {
      setError(true)
      return;
    }
    navigation.navigate('Home', {
      email
    })
  }

  return (
    <View style={style.container}>
      {/* Form */}
      <View style={style.containerWrapper}>
        <Text style={style.title}>Login</Text>
        {/* Email */}
        <View style={{gap: 18}}>
          <View>
            <Text style={style.labelText}>Email</Text>
            <TextInput 
              placeholder='Digite seu email' 
              style={style.input} 
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View>
            <Text style={style.labelText}>Senha</Text>
            <TextInput 
              placeholder='Digite sua senha' 
              secureTextEntry
              style={style.input} 
              onChangeText={(e) => setSenha(e)}
            />
          </View>
        </View>
        {/* Submit button */}
        <TouchableOpacity onPress={onHandleSubmit} style={style.button}>
          <Text style={style.buttonText}>Logar</Text>
        </TouchableOpacity>
        {error && (
          <Text style={style.errorMessage}>
            Por favor preencha todos os campos!
          </Text>
        )}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  containerWrapper: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  labelText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
    color: '#fff'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  input: {
    borderWidth: 1,
    borderColor: '#495057',
    borderRadius: 2,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#495057',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '100%',
    padding: 14,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000'
  },
  errorMessage: {
    color: '#ef233c', 
    marginTop: 10, 
    textAlign: 'center', 
    width: '100%'
  }
})