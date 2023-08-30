import styled from "styled-components";

export const Forms = styled.form`
max-width: 700px;
padding: 10px;
margin: 10px auto;
`;

export const Fieldset = styled.fieldset`
border: 2px solid rgb(148, 148, 148);
border-radius: 5px;
padding: 40px;
background-color: white;
`;

export const Legend = styled.legend`
padding: 10px;
background-color: teal;
border-radius: 5px;
color: white;
`;

export const Header = styled.span`
padding: 10px;
width: 210px;
display: inline-block;
`;

export const Input = styled.input`
    border-radius: 5px;
    width: 250px;
    max-width: 250px;
`;

export const Annotation = styled.span`
font-size: 12px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: teal;
    color: white;
    border: none;
&:hover {
    background-color: hsl(180, 100%, 30%);
&:active {
    background-color: hsl(180, 100%, 40%);
}}
`;