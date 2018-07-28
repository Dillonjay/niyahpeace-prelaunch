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

const postData = (url = ``, data = {}) => {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
};
class App extends React.Component {
  state = { inputValue: '' };
  onUpdatInputValue = (event) => {
    const inputValue = event.target.value;
    this.setState(() => ({ inputValue }));
  }
  onSaveEmail = (email) => {
    postData(`/add_email`, { email })
      .then(res => { 
        console.warn('Here is the res', res);
        return res;
      })
      .then(json => console.warn('Any response?', json))
      .catch((err) => console.warn('Noooo there is an error', err));
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
              <StyledButton
                onClick={() => this.onSaveEmail(this.state.inputValue)}
              >
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