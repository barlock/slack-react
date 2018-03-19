import React from "react";
import PropTypes from "prop-types";
import { Button, Field } from "../components"
import _ from "lodash";

const Attachment = ({ fallback, callbackId, color, pretext, author, markdownIn, title, children }) => {
    const { actions, fields, text } = React.Children.toArray(children)
      .reduce((obj, child) => {
        if (child.type === Button) {
          obj.actions.push(child);
        } else if (child.type === Field) {
          obj.fields.push(child);
        } else {
          obj.text.push(child);
        }

        return obj;
      }, { actions: [], fields: [], text: []});

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
