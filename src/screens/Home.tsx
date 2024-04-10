import React, { useState } from 'react';
import { View, TextInput,  } from 'react-native';
import { styles} from './styles';
import Button from '../components/Button';


const Home: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSubmit = () => {
    if (nome.trim() === '' || email.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    alert(`Nome: ${nome}\nEmail: ${email}`);

    setNome('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
       <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default Home;
