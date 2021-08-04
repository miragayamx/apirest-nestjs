import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from '../dto/producto.dto';
import { Producto } from './schemas/producto.schema';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
      const producto = {
          ...createProductoDto,
          timestamp: Date.now()
      }
    await this.productosService.create(createProductoDto);
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params) : Promise<Producto> {
    return this.productosService.findOne(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() createProductoDto: CreateProductoDto) : Promise<Producto> {
    return this.productosService.update(params.id, createProductoDto);
  }

  @Delete(':id')
  async delete(@Param() params) : Promise<Producto> {
    return this.productosService.delete(params.id);
  }
}
