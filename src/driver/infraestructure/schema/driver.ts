// Dependencies
import mongoose, { Document, Schema } from "mongoose";

import { Driver } from "../../domain/entities/driver-entity";

const schema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    photo: String,
    isActive: {
        type: Boolean,
        default: true,
    },
    locations: [{ type: String }],
});

type SchemeType = Driver & Document;

export default mongoose.model<SchemeType>("Driver", schema);
