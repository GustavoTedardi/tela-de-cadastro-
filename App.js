import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('welcome'); // 'welcome', 'cadastro', 'confirmacao'

  // Dados do cadastro
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // Função para validar e avançar para confirmação
  const cadastrar = () => {
    if (!nome || !dataNascimento || !email || !telefone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    setScreen('confirmacao');
  };

  // Tela de boas-vindas
  if (screen === 'welcome') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>Bem-vindo!</Text>
          <Text style={styles.subtitle}>Aplicativo de Cadastro Simples</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen('cadastro')}
          >
            <Text style={styles.buttonText}>Ir para Cadastro</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Tela de confirmação
  if (screen === 'confirmacao') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>Cadastro Confirmado!</Text>

          <Text style={styles.info}>Nome: {nome}</Text>
          <Text style={styles.info}>Data de Nascimento: {dataNascimento}</Text>
          <Text style={styles.info}>Email: {email}</Text>
          <Text style={styles.info}>Telefone: {telefone}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Limpa dados e volta à tela inicial
              setNome('');
              setDataNascimento('');
              setEmail('');
              setTelefone('');
              setScreen('welcome');
            }}
          >
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Tela de cadastro
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento (DD/MM/AAAA)"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />

        <TouchableOpacity style={styles.button} onPress={cadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => setScreen('welcome')}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  formContainer: {
    padding: 25,
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E3A8A',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: '#6B7280',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});