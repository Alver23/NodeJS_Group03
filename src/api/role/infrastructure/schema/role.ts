// Dependencies
import mongoose, { Document, Schema } from "mongoose";

// Entities
import { IRole } from "../../domain/entities/role-entity";

const schema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    },
});

type SchemeType = IRole & Document;

export default mongoose.model<SchemeType>("Role", schema);
