import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Button = styled.TouchableOpacity`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(16)}px;;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
  gap: ${RFValue(8)}px;
  background-color: ${({theme}) => theme.COLORS.GRAY6};
`;

export const ImgGooleButton =  styled.Image`
   width: ${RFValue(30)}px;
   height: ${RFValue(30)}px;

`;

export const TitleButton = styled.Text`
  font-size:${RFValue(17)}px;
  font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`;
