import React from 'react';
import SpinContainer from '@semcore/ui/spin-container';
import { Text } from '@semcore/ui/typography';
import Dropdown from '@semcore/ui/dropdown';
import Button from '@semcore/ui/button';

class Demo extends React.PureComponent {
  state = { loading: true };
  timerFetch: any;
  timer: any;

  componentDidMount() {
    this.timerFetch = setInterval(this.fetchData, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerFetch);
    clearInterval(this.timer);
  }

  fetchData = () => {
    this.setState({ loading: false });
    setTimeout(() => {
      this.timer = this.setState({ loading: true });
    }, 1000);
  };

  render() {
    const { loading } = this.state;

    return (
      <Dropdown>
        <Dropdown.Trigger tag={Button}>Help me</Dropdown.Trigger>
        <Dropdown.Popper w={290} p={4}>
          <SpinContainer loading={loading} size={'l'}>
            <Text size={100}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam atque beatae
              distinctio doloremque, et id quae reiciendis repellat saepe sapiente sequi veritatis.
              Adipisci, consequuntur excepturi nobis porro quas recusandae?
            </Text>
          </SpinContainer>
        </Dropdown.Popper>
      </Dropdown>
    );
  }
}

export default Demo;
