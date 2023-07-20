import React from 'react';

import { Button, ImgGooleButton, TitleButton } from './styles';
import ImgGoole from '../../assets/google.png';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps{
  title: string
}

export const ButtonSocialGoogle: React.FC<Props> = ({title, ...resto}) => {
  return (
    <Button {...resto}>
      <ImgGooleButton 
      source={ImgGoole} 
      resizeMode='contain'
      />
      <TitleButton>{title}</TitleButton>
    </Button>
  )
}
