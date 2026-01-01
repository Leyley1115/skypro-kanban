import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
    orange: ['#FFE4C2', '#FF6D00'],
    green: ['#B4FDD1', '#06B16E'],
    purple: ['#E9D4FF', '#9A48F1'],
}

export const SCardTheme = styled.div`
  width: auto;
	height: 20px;
	padding: 5px 14px;
	border-radius: 18px;
  font-size: 10px;
	font-weight: 600;
	line-height: 10px;
    background-color: 
    ${({ $topic }) => (
        $topic === "Web Design" 
        ? colors.orange[0] 
        : $topic === "Research" 
        ? colors.green[0] 
        : colors.purple[0]
        )};
    color: ${({$topic}) => (
        $topic === "Web Design" 
        ? colors.orange[1] 
        : $topic === "Research" 
        ? colors.green[1] 
        : colors.purple[1]
    )}
`;

export const SCard = styled.div`
    width: 220px;
	height: 130px;
	background-color: #FFFFFF;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: stretch;
	padding: 15px 13px 19px;
`

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardBtn = styled(Link)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  
  & > div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }
`;