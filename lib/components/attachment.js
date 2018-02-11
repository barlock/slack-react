import React from "react";
import PropTypes from "prop-types";
import { Button } from "../components"
import _ from "lodash";

const attachment = ({ fallback, color, pretext, author, children }) => {
    const [ actions, text ] = _.partition(React.Children.toArray(children),
        child => child.type === Button);

    return (
        <attachments>
            <fallback>{fallback}</fallback>
            {color ? <color>{color}</color> : null}
            {pretext ? <pretext>{pretext}</pretext> : null}
            {author ? <author>{author}</author> : null}
            <text>{text}</text>
            {actions}
        </attachments>
    );
};

attachment.propTypes = {
    fallback: PropTypes.string.isRequired,
    color: PropTypes.string,
    pretext: PropTypes.string,
    children: PropTypes.node
};

export default attachment;
