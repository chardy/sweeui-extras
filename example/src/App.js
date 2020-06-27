import React from 'react';

import {
  Grid, Col, Button, Form, Fieldset, Input, Box, Select,
} from 'sweeui-basic';

export default function App() {
  return (
    <div>
      {/* <Grid noGutter>
        <Col fixed fixedSize="10" fixedXs="20" fullHeight fullHeightXsOff>
          <Box variant="card" margin="10px" radius="5px">
            Test
          </Box>
        </Col>
        <Col fixed fixedSize="max">
          <Box variant="card" margin="10px" radius="5px">
            Test 2
          </Box>
        </Col>
        <Col fixed fixedSize="10" fixedXs="20" fullHeight fullHeightXsOff>
          <Box variant="card" margin="10px" radius="5px">
            Test
          </Box>
        </Col>
      </Grid> */}
      <Button size="small">Button</Button>
      <Button size="normal">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="large">Button</Button>
      <Button size="xlarge">Button</Button>
      <br />
      <br />
      <Button loading type="primary" size="small">
        Button
      </Button>
      <Button loading type="secondary" size="normal">
        Button
      </Button>
      <Button loading type="success" size="medium">
        Button
      </Button>
      <Button loading type="error" size="large">
        Button
      </Button>
      <Button loading type="warning" size="xlarge">
        Button
      </Button>

      <Form>
        <Fieldset type="form-group">
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
        </Fieldset>
        <Fieldset type="action-group">
          <Input id="remember" type="checkbox" />
          <label htmlFor="remember">Remember me</label>
        </Fieldset>
        <br />
        <Fieldset type="action-group">
          <Input id="yes" type="radio" name="agree" />
          <label htmlFor="yes">Yes</label>
          {' '}
          <Input id="no" type="radio" name="agree" />
          <label htmlFor="no">No</label>
        </Fieldset>
        <br />
        <Fieldset type="action-group">
          <Input id="switch" type="switch" />
          {' '}
          <label htmlFor="switch">Switch?</label>
        </Fieldset>
        <br />
        <Fieldset>
          <Select id="multi-state">
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Indonesia</option>
          </Select>
        </Fieldset>
        <br />
        <Fieldset type="action-group">
          <Button type="primary">Submit</Button>
        </Fieldset>
      </Form>
    </div>
  );
}
