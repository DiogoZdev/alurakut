import styled from 'styled-components';

const MainGrid = styled.main`
  width:100%;
  max-width:1000px;
  padding:1rem;
  display:grid;
  grid-gap:10px;
  margin-left:auto;
  margin-right:auto;
  .profileArea{
    display:none;
    @media(min-width:860px) {
      display:block;
    }
  }
  @media(min-width:600px){
    grid-template-areas:"profileArea welcomeArea relationArea";
    grid-template-columns: 160px 3fr 312px;
  }
`;

export default MainGrid;