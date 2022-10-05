import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdressDocument = Adress & Document;

@Schema()
export class Adress {
  @Prop()
  log: string;
   

  @Prop()
  numero: string;
  

  @Prop()
  complemento: string
  

  @Prop()
  bairro: string;

  @Prop()
  cidade: string;

  @Prop()
  estado: string;

  @Prop()
  cep: string;

  @Prop()
  clientId: number;

}

export const AdressSchema = SchemaFactory.createForClass(Adress);