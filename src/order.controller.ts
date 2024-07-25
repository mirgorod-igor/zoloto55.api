import { Controller, Get, Res } from '@nestjs/common'

import data from './data/order'


@Controller('/orders')
export class OrderController {
    constructor() {

    }

    @Get('/list')
    login(@Res({ passthrough: true }) res: Response) {
        return {items: data.slice(0, 10), total: data.length}
    }

}
