import styled from 'styled-components';

const Tags = () => {
  return <TagsContainer>{['Work', 'Short Break', 'Long Break'].map((tag, i) => (
    <Tag key={i}>{tag}</Tag>
  ))}</TagsContainer>;
};

export default Tags;

const TagsContainer = styled.div`
  background: white;
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
`;

const Tag = styled.button`

`;
