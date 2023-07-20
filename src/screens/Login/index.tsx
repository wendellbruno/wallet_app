import React from "react";
import { SafeAreaView } from "react-native";
import {ButtonSocialGoogle, ButtonSocialFacebook} from '../../components';
import {Input} from '../../components';

import { 
  Container, 
  ContentHeader, 
  Title, 
  Description, 
  ContentBody, 
  ContentFooter, 
  ViewButton 
} from "./styles";

export const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja Bem vindo {"\n"} a Wallet App</Title>

          <Description>Entrar com rede social</Description>
          <ViewButton>
            <ButtonSocialGoogle  title="Google"/>
            <ButtonSocialFacebook  title="Facebook" iconName="facebook"/>
          </ViewButton>
        </ContentHeader>

        <ContentBody>
          <Input 
          name="email"
          
          
          />
        </ContentBody>

        <ContentFooter>

        </ContentFooter>

      </Container>
    </SafeAreaView>
  );
};
