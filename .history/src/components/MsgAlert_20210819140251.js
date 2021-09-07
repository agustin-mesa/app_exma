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
z-index:;
`
;

const MsgAlert = () => {
    return (

    );
}


 
export default MsgAlert;