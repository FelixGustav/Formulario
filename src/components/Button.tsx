import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 57,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
