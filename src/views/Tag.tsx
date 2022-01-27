import React from 'react';
import {useTags} from './Tags/useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';

type Params = {
  id: string;
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  line-height: 2rem;
  padding: 1.4rem;
  background: white;
   
`


const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id as string));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <Input label="备注" type="text" placeholder="标签名"
           />
        </label>
      </div>
      <div>
         <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export {Tag};