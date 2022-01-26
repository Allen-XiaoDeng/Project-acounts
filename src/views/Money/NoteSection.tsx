import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
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

const NoteSection: React.FC =() =>{
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return(
     <Wrapper>
       <label>
         <span>备注</span>
         <input type="text" placeholder="在这里添加备注"
                ref={refInput}
                defaultValue={note}
                onBlur={onBlur}
         />
       </label>
     </Wrapper>
   )
}

export {NoteSection};