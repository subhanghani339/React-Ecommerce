import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from '../src/styles/Button'

const ErrorPage = () => {
  return <Wrapper>
    <div className="container">
          <h2>404 Page</h2>
          <h2>UH HO! You're lost.</h2>
          <p>The page you are looking does not exist. CHAL BE NIKAL</p>
          <NavLink to="/">
          <Button>Home</Button>
          </NavLink>
    </div>
    </Wrapper>;
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
export default ErrorPage;
