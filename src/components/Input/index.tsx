import React, {
  forwardRef, 
  useCallback, 
  useState, 
  useImperativeHandle, 
  useRef,
  useEffect
} from 'react';
import {useField} from '@unform/core';
import { Text, TextInputProps } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { Container, IContainer, InputText } from './styles';


interface InputRef {
  focus() : void;

}

interface InputValueReference{
  value: string;

}

interface InputProps extends TextInputProps{
    name: string;
    value?: string;
    //vai passar apenas a propriedade o name do ionicos
    iconeName?: React.ComponentProps<typeof Ionicons>["name"] ;
    containerStyle?: ([key: string] | number);
}

                    //aceitar mais de 1 interface
export const Input: React.ForwardRefRenderFunction<InputRef,InputProps> = (
 { 
  iconeName,
  name,
  value,
  containerStyle,
  ...resto}
) => {

  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


  const theme = useTheme();

  

  return (
    
    <Container style={containerStyle}>
      <IContainer
      isFilled={isFilled}
      hasError={hasError}
      isFocused={isFocused}
      >
        <Ionicons 
        name={iconeName}
        size={25}
        color={isFocused || hasError || isFilled ? theme.COLORS.BLUE1 : theme.COLORS.GRAY5}
        
        />
      </IContainer>

      <InputText 
      isFilled={isFilled}
      hasError={hasError}
      isFocused={isFocused}
      
      />
    </Container>
  )
}
