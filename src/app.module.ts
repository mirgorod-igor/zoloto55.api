import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { CategoryController } from './category.controller'
import { AppController } from './app.controller'
import { ClientController } from './client.controller'
import { OrderController } from './order.controller'


@Module({
    imports: [],
    controllers: [CategoryController, ProductController, AppController, ClientController, OrderController],
})
export class AppModule {

}
