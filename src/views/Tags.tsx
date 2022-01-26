import Layout from '../components/Layout';
import * as React from 'react';
import {useTags} from './Tags/useTags';


function Tags() {
  const {tags,setTags} = useTags();
  return (
    <Layout>
      {tags.map(tag =>
          <li key={tag}>{tag}</li>
        )}
    </Layout>
  );
}

export default Tags;