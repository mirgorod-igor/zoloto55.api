import { Controller, Get, HttpCode, Param, Post, Res, StreamableFile } from '@nestjs/common'

import { join } from 'path'
import { createReadStream } from 'fs'


import data from './data'
import home from './data/home'



@Controller('/')
export class AppController {
    constructor() {

    }

    @Post('/auth/login')
    login(@Res({ passthrough: true }) res: Response) {
        
    }

    @Get('/data')
    list() {
        return data
    }

    @Get('/home')
    home() {
        return home
    }

    @Get('/for_whom/list')
    forWhom() {
        return data.forWhom
    }

    @Get('/metal/list')
    metal() {
        return data.metal
    }

    @Get('/proba/list')
    proba() {
        return data.proba
    }

    @Get('/brand/list')
    brand() {
        return data.brand
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
