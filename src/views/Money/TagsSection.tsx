import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
    background: #ffffff; padding: 1.2rem 1.6rem;
    flex-grow: 1; display: flex; flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    > ol {margin: 0 -1.2rem;
      > li{
        background: #D9D9D9; border-radius: 1.8rem;
        display: inline-block; padding: 0.4rem 1.6rem;
        font-size: 1.4rem; margin: 0.8rem 1.2rem;
        &.selected{
        background: #f60;
       }
      }
    }
    > button{
      background: none; border: none; 
      padding: 0.2rem 0.4rem;
      border-bottom: 0.1rem solid #333;
      color:#666; margin-top: 0.8rem;
    }
 `;

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣','食','住','行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if(tagName!==null){
      setTags([...tags, tagName])
    }
  };
  const onToggleTag = (tag:string) =>{
      const index = selectedTags.indexOf(tag)
    if(index >=0){
      // 如果 tag 已经被选中， 就复制所有没有被选中的 tag,作为新的 selectedTag
      setSelectedTags(selectedTags.filter(t => t!== tag))
    }else{
      setSelectedTags([...selectedTags, tag])
    }
  };
const getClass = (tag:string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
     <ol>
       {tags.map(tag =>
      <li key={tag} onClick={
        ()=> {onToggleTag(tag);}
      } className={getClass(tag)}>{tag}</li>
       )}
     </ol>
    <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection}