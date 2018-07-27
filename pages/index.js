import React from 'react';
import {
  StyledPageWrapper,
  StyledHeader,
  StyledCenterColumn,
  StyledContent,
  StyledBlackOut,
  StyledInput,
  StyledFormGroup,
  StyledButton,
  StyledLogo,
} from '../styles/index';

class App extends React.Component {
  state = { inputValue: '' };
  onUpdatInputValue = (event) => {
    const inputValue = event.target.value;
    this.setState(() => ({ inputValue }));
  }
  render() {
    return (
      <StyledPageWrapper>
        <StyledLogo />
        <StyledBlackOut />
        <StyledCenterColumn>
          <StyledContent>
            <StyledHeader>
              Your Good Vibes Portal is coming soon...
            </StyledHeader>
            <StyledFormGroup>
              <StyledInput
                onChange={this.onUpdatInputValue}
                value={this.state.inputValue}
                placeholder="Email"
              />
              <StyledButton>
                SUBSCRIBE
              </StyledButton>
            </StyledFormGroup>
          </StyledContent>
        </StyledCenterColumn>
      </StyledPageWrapper>
    );
  }
}

export default App;