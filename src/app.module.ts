import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { CarritoModule } from './carrito/carrito.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/ecommerce',{useFindAndModify : false}), ProductosModule, CarritoModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
