import * as mongoose from "mongoose";

export const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videos: [
        {
            generateId: String,
            title: String,
            description: String,
            url: String,
            duration: {
                type: Number,
                default: 0
            },
            done: {
                type: Boolean,
                default: false
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
}) 