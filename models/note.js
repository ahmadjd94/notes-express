import {mongoose} from "./db.js";

export const notesSchema = new Schema({
    content: String,
    created: { type: Date, default: Date.now }
  },
  { strict: false }
);


module.exports = notesSchema;