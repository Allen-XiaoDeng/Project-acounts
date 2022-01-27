import Layout from '../components/Layout';
import * as React from 'react';
import {useTags} from './Tags/useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
const TagList = styled.ol`
  font-size: 1.6rem;

  > li {
    //#e5e5e7
    border-bottom: 0.1rem solid #d5d5d9;
    line-height: 2rem;
    margin-left: 1.6rem;
    > a {
      padding: 1.2rem 1.6rem 1.2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Space = styled.div`
  height: 1.6rem;
`;

function Tags() {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
            <span className="oneLine">{tag.name}</span>
            <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;