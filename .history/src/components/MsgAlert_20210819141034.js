import React, {useEffect } from 'react';
import styled, {keyframes} from 'styled-components';

const slideDown = keyframes`
    0%{
            transform: translateY(-1.25rem);
            opacity:0;
    }
    10%{
        transform: translateY(1.25rem);
        opacity:1;
    }
    90%{
        transform: translateY(1.25rem);
        opacity:1;
    }
    100%{
        transform: translateY(1.25rem);
        opacity:0;
    }
`;

const ContainerAlert = styled.div`
z-index: 1000;
width: 100%;
left: 0;
top: 1.25rem;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
animation: ${slideDown} 4s ease forwards;

p {
    background: ${(props) => {
        if(props.tipo === "error") return "#CC2424";
        else if(props.tipo === "exito") return "#24CCA7";
        else return "#000";
    }};    
    padding: 15px 20px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
}
`;

const MsgAlert = () => {
    return (

    );
}


 
export default MsgAlert;