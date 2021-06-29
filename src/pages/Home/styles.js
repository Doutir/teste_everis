import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  background:#212121;
  flex:1;
  width:100vw;
  height:100vh;

  button{
    padding:1.5rem 3rem;
    border:none;
    border-radius:0.4rem;
    background:#009944;
    color:#ffebee;
    font-weight:700;
    text-transform:uppercase;

    &+button{
      margin-top:1rem;
      background:#cf000f;
      
      
    }
  }

`;
export const Counter = styled.h1`
  font-size: 3.4rem;
  color:#f2f5f9;
  margin-bottom:5rem;

`;