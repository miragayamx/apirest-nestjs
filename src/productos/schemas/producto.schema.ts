import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  codigo: string;

  @Prop({ required: true })
  foto: string;

  @Prop({ required: true })
  precio: number;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  timestamp: Date;

}

export const ProductoSchema = SchemaFactory.createForClass(Producto);