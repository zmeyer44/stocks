import styled from 'styled-components';

export const ButtonContainer = styled.div`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border: 3px solid var(--Org);
color: var(--Org);
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition:all .25s ease-in-out;
text-decoration: none;
&:hover{
    text-decoration: none;
    background:var(--Org);
    color: var(--Grey);
}
&:focus{
    text-decoration: none;
    outline: none;
}
`;
export const ButtonContainer2 = styled.div`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border: 3px solid var(--Blue);
color: var(--Blue);
padding: .2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition:all .5s ease-in-out;
&:hover{
    text-decoration: none !important;
    background:var(--Blue) !important;
    color: var(--Off) !important; 
}
&:focus{
    outline: none;
} 
`;