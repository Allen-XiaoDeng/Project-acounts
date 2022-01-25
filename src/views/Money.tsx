import Layout from '../components/Layout';
import * as React from 'react';
import styled from 'styled-components';

function Money() {

  const TagsSection = styled.section`
    background: #ffffff; padding: 1.2rem 1.6rem;
    flex-grow: 1; display: flex; flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
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
    font-size: 2.4rem;
    >ul{
      display: flex;
      background: #c4c4c4;
      >li {
        width: 50%;
        text-align: center;
        padding: 1.6rem 0;
        position: relative;
        &.selected::after{
          content: '';
          display: block;
          height: 0.3rem;
          background: #333;
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 0;
        }
      }
    }
  `
  const NumberPadSection = styled.section`
    display: flex;
    flex-direction: column;
    > output{
      background: white;
      font-size: 3.6rem;
      line-height: 7.2rem;
      text-align: right;
      padding: 0 1.6rem;
      box-shadow: inset 0 -0.5rem 0.5rem -0.5rem rgba(0,0,0,0.25),
                  inset 0  0.5rem 0.5rem -0.5rem rgba(0,0,0,0.25);
    }
    > .pad{
      > button{
        border: none; font-size: 1.8rem; float: left; width: 25%; height: 6.4rem;
        &.ok{height: 12.8rem; float: right;}
        &.zero{width:50%;}
        &:nth-child(1){
          background: #f2f2f2;
        }
        &:nth-child(2),
        &:nth-child(5) {
          background: #e0e0e0;
        }
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9) {
          background: #d3d3d3;
        }
        &:nth-child(4),
        &:nth-child(7), 
        &:nth-child(10) {
          background: #c1c1c1;
        }
        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13) {
          background: #b8b8b8;
        }
        &:nth-child(12) {
          background: #9a9a9a;
        }
        &:nth-child(14) {
          background: #a9a9a9;
        }
      }
    }
  `
  const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
  `
  return (
    <MyLayout>
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
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <output>
          100
        </output>
        <div className="pad clearfix">
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
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}





export default Money;