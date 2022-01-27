import styled from 'styled-components';
import React from 'react';
import {useTags} from '../Tags/useTags';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 1.2rem 1.6rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -1.2rem;

    > li {
      background: #D9D9D9;
      border-radius: 1.8rem;
      display: inline-block;
      padding: 0.4rem 1.6rem;
      font-size: 1.4rem;
      margin: 0.8rem 1.2rem;

      &.selected {
        background: #f60;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 0.2rem 0.4rem;
    border-bottom: 0.1rem solid #333;
    color: #666;
    margin-top: 0.8rem;
  }
`;

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果 tag 已经被选中， 就复制所有没有被选中的 tag,作为新的 selectedTag
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => {onToggleTag(tag.id);}
          } className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};