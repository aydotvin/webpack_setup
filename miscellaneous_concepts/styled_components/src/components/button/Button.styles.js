import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
	border: 2px solid #4caf50;
	background-color: ${(props) => (props.variant === "outlined" ? "#fff" : "#4caf50")};
	color: ${(props) => (props.variant === "outlined" ? "#4caf50" : "#fff")};
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	transition: 0.1s all ease-out;
	&:hover {
		background-color: ${(props) => (props.variant !== "outlined" ? "#fff" : "#4caf50")};
		color: ${(props) => (props.variant !== "outlined" ? "#4caf50" : "#fff")};
	}
`;

export const FancyButton = styled(StyledButton)`
	background-image: linear-gradient(to right, #4158d0 0%, #c850c0 60%);
	border: none;
`;

export const SubmitButton = styled(StyledButton).attrs(({ name, type, age }) => {
	return {
		name,
		type,
		"data-age": age,
	};
})`
	border: 4px solid orange;
	&:active {
		background-color: ${(props) => (props.variant !== "outline" ? "#FFF" : "#4caf50")};
		box-shadow: 0 5px #666;
		transform: translateY(4px);
	}
`;

export const SubBtn = styled.button.attrs((props) => {
	return {
		type: "button",
		"data-age": props.age || 0,
	};
})``;

const rotate = keyframes`
	0%{
		transform: translateX(0)
	}
	50%{
		transform: translateX(100px)
	}
	100%{
		transform: translateX(0)
	}
	/* from {
		transform:rotate(0deg)
	}
	to {
		transform:rotate(360deg)
	} */
`;

export const AnimatedButton = styled(FancyButton)`
	animation: ${rotate} infinite 2s linear;
`;

export const ThemedButton = styled(StyledButton)`
	border: 2px solid ${(props) => props.theme.dark.primary};
	background-color: ${(props) => props.theme.dark.primary};
	color: ${(props) => props.theme.dark.text};
`;
