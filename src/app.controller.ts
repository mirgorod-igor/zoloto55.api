import { Controller, Get, Param, StreamableFile } from '@nestjs/common'

import { join } from 'path'
import { createReadStream } from 'fs'


import data from './data'
import home from './data/home'



@Controller('/')
export class AppController {
    constructor() {

    }

    @Get('/data')
    list() {
        return data
    }

    @Get('/home')
    home() {
        return home
    }

    @Get('/jewerly/:name')
    jewerly(@Param('name') name: string) {
        const file = createReadStream(join(process.cwd(), 'src', 'img', 'jewerly', name))
        return new StreamableFile(file)
    }

    @Get('/banner/:name')
    banner(@Param('name') name: string) {
        const file = createReadStream(join(process.cwd(), 'src', 'img', 'banner', name))
        return new StreamableFile(file)
    }
}
