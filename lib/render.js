import React from "react";
import ReactDOMServer from "react-dom/server";
import { promisify } from "util";
import { parseString } from "xml2js";

const parseXML = promisify(parseString);

function ensureArray(json, field) {
    if (json[field] && !(json[field] instanceof Array)) {
        json[field] = [ json[field] ];
    }
}

export default async element => {
    const xml = ReactDOMServer.renderToStaticMarkup(element),
        json = await parseXML(xml, {
            explicitArray: false,
            trim: true,
            explicitRoot: false,
            emptyTag: "",
        });

    if (json.attachments) {
      ensureArray(json, "attachments");

      json.attachments = json.attachments.map(attachment => {
        ensureArray(attachment, "actions");

        return attachment;
      });
    }

    return json;
}
