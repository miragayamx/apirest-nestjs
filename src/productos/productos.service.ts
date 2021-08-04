import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from '../dto/producto.dto';
import { Producto, ProductoDocument } from './schemas/producto.schema';

@Injectable()
export class ProductosService {
    constructor(
        @InjectModel(Producto.name) private readonly productoModel: Model<ProductoDocument>,
      ) {}
    
      async create(createProductoDto: CreateProductoDto): Promise<Producto> {
        const createdProd = new this.productoModel(createProductoDto);
        return createdProd.save();
      }
    
      async findAll(): Promise<Producto[]> {
        return this.productoModel.find().exec();
      }

      async findOne(id: string): Promise<Producto> {
        return this.productoModel.findById(id).exec();
      }

      async update(id: string, createProductoDto: CreateProductoDto): Promise<Producto> {
          const updatedProd = await this.productoModel.findByIdAndUpdate(id, createProductoDto).exec();
          return this.productoModel.findById(updatedProd).exec();
      }

      async delete(id: string): Promise<any> {
        return this.productoModel.findByIdAndDelete(id).exec();
    }
}
