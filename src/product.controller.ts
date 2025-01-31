import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common'

import { join } from 'path'
import { createReadStream } from 'fs'

import items from './data/products'



@Controller('/product')
export class ProductController {
    constructor() {

    }

    @Get('/list')
    list() {
        return { items, total: items.length }
    }

    @Get('/img/:name')
    img(@Param('name') name: string) {
        const file = createReadStream(join(process.cwd(), 'src', 'img', 'products', name))
        return new StreamableFile(file)
    }
}
