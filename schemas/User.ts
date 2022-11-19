import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true, default: false})
    isEmailActivated: boolean;

    @Prop({required: true})
    emailActivationLink: string;

    @Prop({required: true})
    username: string;

    @Prop({required: true})
    password: string;

    @Prop({default: 1024**3*10})
    diskSpace: number;

    @Prop({default: 0})
    usedSpace: number;

    @Prop()
    avatar: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'File' })
    files: string
}

export const UserSchema = SchemaFactory.createForClass(User);