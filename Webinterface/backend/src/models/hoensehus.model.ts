import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type HoensehusDocument = HoensehusData & Document

export class HoensehusData {

}

export const HoensehusSchema = SchemaFactory.createForClass(HoensehusData);
