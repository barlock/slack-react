import React from "react";
import PropTypes from "prop-types";
import { render, components} from "../lib";
const { Message, Attachment, Button, User, Field } = components;

const BoardRequest = ({ command, train }) => {
    const { place, time, passengers } = train;

    return (
        <Message>
            <Attachment fallback="To board the train, DM the conductor" author="foo" markdownIn={['foo','bar']} title="some title">
                Chew choo! <User id={command.user_id}/> started a train to {place} at {time}.
                { passengers.length > 0 ? passengers
                    .map(passenger => <User key={passenger.id} id={passenger.id}/> ) : null} Will you join?

                <Field title="Time" short>{time}</Field>

                <Button name="board">Board the Train</Button>
            </Attachment>
        </Message>
    );
};

BoardRequest.propTypes = {
    command: PropTypes.object.isRequired,
    train: PropTypes.object.isRequired,
};

const command = {
    user_id: "userid",
};
const train = {
    place: "Super Duper",
    time: "11:00am",
    passengers: [
        { id: "pass1" },
        { id: "pass2" },
        { id: "pass3" }
    ]
};

(async () => {
    const messageJSON = await render(<BoardRequest command={command} train={train}/>);

    console.log(JSON.stringify(messageJSON, null, 2));
})();
