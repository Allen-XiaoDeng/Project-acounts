import React from 'react';
import {useTags} from './Tags/useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';

type Params = {
  id: string;
}

const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id as string));
  return (
    <Layout>
      <div>{tag.name}</div>
    </Layout>
  );
};

export {Tag};