import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  line-height: 2.4rem;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.333333%;
      text-align: center;
      >a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.4rem;
      .icon {
        width: 2.4rem;
        height: 2.4rem;
      }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tag"/>
            标签页</Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账页</Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="chart"/>
            统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;