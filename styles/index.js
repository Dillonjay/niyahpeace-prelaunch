import styled from 'styled-components';

export const PageWrapper = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  background: url('../static/background-img.png') no-repeat;
  display: grid;
  grid-template: 1fr / 1fr 3fr 1fr;
`;

export const BlackOut = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgb(0,0,0, 0.55);
 `;

export const Logo = styled.div`
  height: 84px;
  background: url('../static/logo.png') 0 0 no-repeat;
  background-size: cover;
  width: 142px;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
`;

export const CenterColumn = styled.section`
  grid-column: 2;
  display: grid;
  grid-template: repeat(5, 1fr) / 1fr;
`;

export const Content = styled.div`
  grid-area: 2 / 1 / 5 / 2;
  z-index: 100;
  padding: 20px 40px;
`;

export const Header = styled.h1`
  font-family: "Andale Mono", AndaleMono, monospace;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: left;
  color: white;
  width: 95%;
`;

export const FormGroup = styled.div`
  display: flex;
  height: 50px;
`;

export const Input = styled.input`
  background: rgb(20,33,52, 0.6);
  color: white;
  font-size: 16px;
  width: 85%;
  border: solid white 1px;
  padding-left: 20px;
`;

export const Button = styled.button`
  background: rgba(237, 35, 37, 0.59);
  border: solid white 1px;
  margin-left: 15px;
  border-radius: 3px;
  width: 200px;
  font-size: 16px;
  color: white;
  &:hover {
    background: rgb(237, 35, 37);
    cursor: pointer;
  }
`;

export const MenuButton = styled.div`
  position: fixed;
  right: 15px;
  top: 15px;
  height: 115px;
  width: 55px;
  background: url('../static/test.png') no-repeat;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
`;
