import { Document } from 'mongoose'

export interface Course extends Document {
    readonly title: string;
    readonly description: string;
    readonly videos: object[];
}
