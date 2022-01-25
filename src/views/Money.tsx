import Layout from '../components/Layout';
import * as React from 'react';
import styled from 'styled-components';

function Money() {

  const TagsSection = styled.section`
    background: #ffffff; padding: 1.2rem 1.6rem;
    > ol {margin: 0 -1.2rem;
      > li{
        background: #D9D9D9; border-radius: 1.8rem;
        display: inline-block; padding: 0.4rem 1.6rem;
        font-size: 1.4rem; margin: 0.8rem 1.2rem
      }
    }
    > button{
      background: none; border: none; 
      padding: 0.2rem 0.4rem;
      border-bottom: 0.1rem solid #333;
      color:#666; margin-top: 0.8rem;
    }
`
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
  const CategorySection = styled.section`
  `
  const NumberPadSection = styled.section`
  `

  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>category
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>numberPad
        <div>
          100
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;