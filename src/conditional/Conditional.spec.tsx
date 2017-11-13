import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Conditional } from './Conditional';

it('shows hello message when logged in.', () => {
  const tree = renderer.create(
    <Conditional isLoggedIn />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows stranger danger message when not logged in.', () => {
  const tree = renderer.create(
    <Conditional isLoggedIn={false} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
