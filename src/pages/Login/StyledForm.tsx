import styled from "styled-components";
export const Form = styled.form `

width:${(props)=> props.width || 'auto'};
heigth:${(props) => props.heigth || 'auto'};
position: ${(props) => props.position || 'static'};
left: ${(props) => props.left || '0'};
rigth: ${(props) => props.rigth || '0'};
border-radius: ${(props) => props.border || '0'};
transform: ${(props) => props.transform ||'translate'};
padding: ${(props) => props.padding || '0'};
z-index: ${(props) => props.index || '0'};
`;

export const Header = styled.div`
display:flex;
flex-direction:${(props) => props.direction || 'row'};
justify-content:${(props)=> props.justify || 'flex-start'};
align-items: ${(props)=>props.align || 'center'};
padding: ${(props)=>props.padding || '0'};
width: ${(props)=>props.width || 'auto'};
height: ${(props)=>props.height || 'auto'};
color: ${(props)=>props.color || '#574B90'};
`;