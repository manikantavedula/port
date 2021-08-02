import React, { useState } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";

const DesktopContainer = ({ children, Media, Top }) => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">About Me</Menu.Item>
              <Menu.Item as="a">Experience</Menu.Item>
              <Menu.Item as="a">Skills</Menu.Item>
              <Menu.Item as="a">Certifications</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Resume
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Get In Touch
                </Button>
              </Menu.Item>
            </Container>
          </Menu>

          <Top />
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
};

export default DesktopContainer;
