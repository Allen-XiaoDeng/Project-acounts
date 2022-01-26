import styled from 'styled-components';

const NotesSection = styled.section`
    background: #f5f5f5;
    padding: 0 1.6rem;
    font-size: 1.4rem;
   > label {
     display: flex;
     align-items: center;
     >span { 
       margin-right: 1.6rem;
       white-space: nowrap;}
     >input {
       display: block;
       width: 100%;
       height: 7.2rem;
       background: none;
       border: none;
     }
  }
  `
export {NotesSection};