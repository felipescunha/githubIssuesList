import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 5px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;


export const IssuesFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;

  button {
    width: 80px;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;


    &:nth-child(${props => props.active + 1}) {
      background: #555555;
      color: white;
    }
  }
`;

// export const AllButton = styled.button.attrs(props => ({
//   type: 'onClick',
//   value:props.value,
// }))``;

export const PageNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 

  button {
    margin-top: 20px;
    width: 60px;
    border-radius: 2px;
    background: #eee;
    padding: 2px;

    :focus {
      background: #555555;
      color: #FFF;
      font-style:oblique;
    }
  }
`;


export const PageButtons = styled.button`
  
  outline: 0;
  border: 0;
  margin-top: 15px;
  border-radius: 2px;
  width: 80px; 
  padding: 2px;
  transition: opacity 0.25s ease-out;
  
  &:disabled {
      opacity: 0.50;
      cursor: not-allowed;
    }

`;

