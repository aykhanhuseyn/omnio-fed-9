import type { CSSProperties } from 'react';
import styled from 'styled-components';

interface FormProps {
	height: `${number}px`;
	width: `${number}px`;
	left: `${number}%`;
	right: `${number}%`;
	position: CSSProperties['position'];
	padding: CSSProperties['padding'];
	index: CSSProperties['zIndex'];
	transform: CSSProperties['transform'];
	borderRadius: CSSProperties['borderRadius'];
}

export const Form = styled.form<FormProps>`
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
	position: ${(props) => props.position || 'static'};
	left: ${(props) => props.left || '0'};
	right: ${(props) => props.right || '0'};
	border-radius: ${(props) => props.borderRadius || '0'};
	transform: ${(props) => props.transform || 'translate'};
	padding: ${(props) => props.padding || '0'};
	z-index: ${(props) => props.index || '0'};
`;

interface HeaderProps {
	direction?: CSSProperties['flexDirection'];
	justify: CSSProperties['justifyContent'];
	align: CSSProperties['alignItems'];
	padding: CSSProperties['padding'];
	width?: CSSProperties['width'];
	height?: CSSProperties['height'];
	color?: CSSProperties['color'];
}

export const Header = styled.div<HeaderProps>`
	display: flex;
	flex-direction: ${(props) => props.direction || 'row'};
	justify-content: ${(props) => props.justify || 'flex-start'};
	align-items: ${(props) => props.align || 'center'};
	padding: ${(props) => props.padding || '0'};
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
	color: ${(props) => props.color || '#574B90'};
`;
