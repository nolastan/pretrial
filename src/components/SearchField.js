import styled from 'styled-components';

const SearchField = styled.div`
  display: flex;
  margin: 0.25rem 0;
  input {
    border-radius: 4px 0 0 4px;
  }
  input[type=submit] {
    flex: 1;
    border-radius: 0 4px 4px 0;
  }
`

export default SearchField
