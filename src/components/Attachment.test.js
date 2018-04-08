import React from 'react';
import PropTypes from 'prop-types';
import {
  render,
  Message, Attachment, Button, User, Field
} from '../../src';

const BoardRequest = ({ command, train, callbackId }) => {
  const { place, time, passengers } = train;
  return (
    <Message>
      <Attachment callbackId="magic-callback-id" fallback="To board the train, DM the conductor" author="foo" markdownIn={['foo', 'bar']} title="some title">
        Chew choo! <User id={command.user_id} /> started a train to {place} at {time}.
        { passengers.length > 0 ? passengers
          .map(passenger => <User key={passenger.id} id={passenger.id} />) : null} Will you join?

        <Field title="Time" short>{time}</Field>

        <Button name="board" callbackId={callbackId}>Board the Train</Button>
      </Attachment>
    </Message>
  );
};

BoardRequest.propTypes = {
  command: PropTypes.object,
  train: PropTypes.object,
  callbackId: PropTypes.string
};

const props = {
  callbackId: 'amazing-callback-id',
  command: {
    user_id: 'userid'
  },
  train: {
    place: 'Super Duper',
    time: '11:00am',
    passengers: [
      { id: 'pass1' },
      { id: 'pass2' },
      { id: 'pass3' }
    ]
  }
};

test('Can render a slack message with an attachment', async () => {
  const message = await render(<BoardRequest {...props}/>);

  expect(message).toEqual({
    text: '',
    attachments: [{
      actions: [{
        name: 'board',
        text: 'Board the Train',
        type: 'button',
        value: 'board'
      }],
      author: 'foo',
      callback_id: 'magic-callback-id',
      fallback: 'To board the train, DM the conductor',
      fields: [{
        short: 'true',
        title: 'Time',
        value: '11:00am'
      }],
      mrkdwn_in: ['foo', 'bar'],
      text: 'Chew choo! <@userid> started a train to Super Duper at 11:00am.<@pass1><@pass2><@pass3> Will you join?',
      title: 'some title'
    }]
  });
});
