import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;
   

  @Prop()
  razsoc: string;
  

  @Prop()
  telefone: string
  

  @Prop()
  cnpj: string;

  @Prop()
  clientId: number;



}

export const ClientSchema = SchemaFactory.createForClass(Client);