import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  line-height: 2.4rem;
  box-shadow: 0 0 0.3rem rgba(0,0,0,0.25);
  > ul {
    display: flex;
    >li{
      width: 33.333333%;
      text-align: center;
      display: flex;
      padding: 0.4rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;

const Nav =()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;