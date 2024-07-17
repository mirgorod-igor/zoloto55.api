import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { CategoryController } from './category.controller'
import { AppController } from './app.controller'


@Module({
    imports: [],
    controllers: [CategoryController, ProductController, AppController],
})
export class AppModule {

}
