import {mongoose} from "./db.js";

export const usersSchema = new Schema({
    content: String,
    created: { type: Date, default: Date.now }
  },
  { strict: false }
  );
  

  