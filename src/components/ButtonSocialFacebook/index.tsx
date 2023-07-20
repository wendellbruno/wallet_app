import React from 'react';

import { Button, TitleButton, ImgFacebookButton } from './styles';
import { TouchableOpacityProps } from 'react-native';
import {Fontisto} from '@expo/vector-icons';

interface Props extends TouchableOpacityProps{
  title: string,
  iconName: React.ComponentProps<typeof Fontisto>["name"]
}

export const ButtonSocialFacebook: React.FC<Props> = ({title, iconName, ...resto}) => {
  return (
    <Button {...resto}>
      <ImgFacebookButton name={iconName} />
      <TitleButton>{title}</TitleButton>
    </Button>
  )
}
