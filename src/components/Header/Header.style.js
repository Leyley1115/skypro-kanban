import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SHeader = styled.header`
    width: 100%;
	margin: 0 auto;
	background-color: #FFFFFF;
`;

export const HeaderBlock = styled.div`
    height: 70px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	position: relative;
	top: 0;
	left: 0;
	padding: 0 10px;
`;

export const HeaderLogo = styled.div`
    & img {
		width: 85px;
	}
`;

export const HeaderLogoDark = styled(HeaderLogo)`
    display: none;
`;

export const HeaderNav = styled.nav`
    max-width: 290px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ButtonHeaderNew = styled.button`
    width: 178px;
	height: 30px;
	border-radius: 4px;
	background-color: #565EEF;
	color: #FFFFFF;
	border: none;
	font-size: 14px;
	line-height: 1;
	font-weight: 500;
	margin-right: 20px;
	& a {
		color: #FFFFFF;
	}
`;

export const HeaderPopUserSet = styled.div`
    display: ${({$state}) => ($state ? 'block' : 'none')};
	position: absolute;
	top: 61px;
	right: 0;
	width: 213px;
	height: 205px;
	border-radius: 10px;
	border: 0.7px solid rgba(148, 166, 190, 0.40);
	background: #FFF;
	box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
	padding: 34px;
	text-align: center;
	z-index: 2;
`;

export const SetName = styled.p`
    color: #000;
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
	letter-spacing: -0.14px;
	margin-bottom: 4px;
`;

export const SetMail = styled.p`
    color: #94A6BE;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.14px;
	margin-bottom: 10px;
`;

export const SetTheme = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30px;

	& p {
		color: #000;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.14px;
	}

	& input[type="checkbox"] {
		position: relative;
		width: 24px;
		height: 13px;
		border-radius: 100px;
		background: #EAEEF6;
		outline: none;
		appearance: none;

		&::before {
			content: "";
			position: absolute;
			top: 1px;
			left: 1px;
			width: 11px;
			height: 11px;
			border-radius: 50%;
			background-color: #94A6BE;
			transition: 0.5s;
		}
	}

	& input:checked[type="checkbox"]::before {
		left: 12px;
	}
`;

export const Hover3 = styled(Link)`

	width: 72px;
	height: 30px;
	background: transparent;
	color: #565EEF;
	border-radius: 4px;
	border: 1px solid #565EEF;
	color: #565EEF;
	
    &:hover{background-color: #33399b;
        color: #FFFFFF;
}
`;

export const Hover2 = styled(Link)`
    color: #33399b;

	&::after {
			border-left-color: #33399b;
			border-bottom-color: #33399b;
			
	}
`;

export const Checkbox = styled.input`
& input[type="checkbox"] {
			position: relative;
			width: 24px;
			height: 13px;
			border-radius: 100px;
			background: #EAEEF6;
			outline: none;
			appearance: none;

			&::before {
				content: "";
				position: absolute;
				top: 1px;
				left: 1px;
				width: 11px;
				height: 11px;
				border-radius: 50%;
				background-color: #94A6BE;
				transition: 0.5s;
			}
		}

		& input:checked[type="checkbox"]::before {
			left: 12px;
		}
`

