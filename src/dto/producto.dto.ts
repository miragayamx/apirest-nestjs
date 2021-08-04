export class CreateProductoDto {
    readonly nombre: string;
    readonly descripcion: string;
    readonly codigo: string;
    readonly foto: string;
    readonly precio: number;
    readonly stock: number;
}