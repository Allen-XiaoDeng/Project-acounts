import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  background: #fff;
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
        &.active{
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return(
  <NavWrapper>
    <ul>
      <li>
        <NavLink to="/tags"
                 className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <Icon name="tag" />
          标签页</NavLink>
      </li>
      <li>
        <NavLink to="/money"
                 className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <Icon name="money"/>
          记账页</NavLink>
      </li>
      <li>
        <NavLink to="/statistics"
                 className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <Icon name="chart"/>
          统计页</NavLink>
      </li>
    </ul>
  </NavWrapper>
)
};

export default Nav;