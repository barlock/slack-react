import React from "react";
import PropTypes from "prop-types";
import { Button, Field } from "../components"
import _ from "lodash";

const Attachment = ({ fallback, callbackId, color, pretext, author, markdownIn, title, children }) => {
    // const [ actions, text ] = _.partition(React.Children.toArray(children),
    //     child => child.type === Button);

    const { actions, fields, text } = _.keyBy(React.Children.toArray(children),
        child => {
            if (child.type === Button) {
              return "actions";
            }

            if (child.type === Field) {
              return "fields";
            }

            return "text";
        });

    return (
        <attachments>
            <fallback>{fallback}</fallback>
            {callbackId ? <callback_id>{callbackId}</callback_id> : null }
            {color ? <color>{color}</color> : null}
            {pretext ? <pretext>{pretext}</pretext> : null}
            {author ? <author>{author}</author> : null}
            {markdownIn ? markdownIn.map(field => <mrkdwn_in key={field}>{field}</mrkdwn_in>) : null}
            {title ? <title>{title}</title> : null}
            
            <text>{text}</text>
            {actions}
            {fields}
        </attachments>
    );
};

Attachment.propTypes = {
    fallback: PropTypes.string.isRequired,
    color: PropTypes.string,
    pretext: PropTypes.string,
    children: PropTypes.node,
    callbackId: PropTypes.string,
};

export default Attachment;
