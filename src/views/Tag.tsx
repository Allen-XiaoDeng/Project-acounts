import React from 'react';
import {useTags} from './Tags/useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Space} from '../components/Space';
import {Center} from '../components/Center';

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

`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 1.6rem;
  margin-top: 0.8rem;
`;

const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id as string));
  const tagContent = (tag: {id:number; name: string}) => (
    <div>
      <InputWrapper>
        <Input label="备注" type="text" placeholder="标签名"
               value={tag.name}
               onChange={(e) =>{
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
  )
    return (
      <Layout>
        <Topbar>
          <Icon name="left"/>
          <span>编辑标签</span>
          <Icon/>
        </Topbar>
        {tag ? tagContent(tag): <Center>tag 不存在</Center>}
      </Layout>
    );
};

export {Tag};