import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Form,
  Checkbox,
  Button,
  Input,
  GridColumn,
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Grid container textAlign="center">
          <br />
          <Grid.Row>
            <GridColumn width={6}>
              <Form>
                <Form.Field>
                  <Input
                    icon="user"
                    iconPosition="left"
                    placeholder="Email Address"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    type="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button fluid color="teal" type="submit">
                  Login
                </Button>
              </Form>
            </GridColumn>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <Button fluid type="submit">
                Tidak Punya Akun? Silahkan <a href="/">Register</a>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
