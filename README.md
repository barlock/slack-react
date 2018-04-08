# React Slack

React components for building slack messages

```js
const BoardRequest = ({ command, train }) => {
  const { place, time, passengers } = train;
  return (
    <Message>
      <Attachment callbackId="magic-callback-id" fallback="To board the train, DM the conductor" author="foo" markdownIn={['foo', 'bar']} title="some title">
                Chew choo! <User id={command.user_id} /> started a train to {place} at {time}.
        { passengers.length > 0 ? passengers
                    .map(passenger => <User key={passenger.id} id={passenger.id} />) : null} Will you join?

        <Field title="Time" short>{time}</Field>

        <Button name="board">Board the Train</Button>
      </Attachment>
    </Message>
  );
};
```
