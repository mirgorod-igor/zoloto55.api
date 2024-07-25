import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common'

import data from './data/client'


@Controller('/clients')
export class ClientController {
    constructor() {

    }

    @Get('/list')
    list(@Res({ passthrough: true }) res: Response) {
        return { items: data.slice(0, 10), total: data.length }
    }

    @Get('/search')
    search(@Query('text') text, @Res({ passthrough: true }) res: Response) {
        console.log(text)
        return (text ? data.filter(it => it.name.toLowerCase().includes(text.toLowerCase())) : data).slice(0, 10)
    }
}
