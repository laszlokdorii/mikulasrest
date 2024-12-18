import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { GyerekekService } from './gyerekek.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Controller('gyerekek')
export class GyerekekController {
  constructor(private readonly gyerekekService: GyerekekService) {}

  @Put(':gyerekId/jatekok/:jatekId')
  async addJatek(
    @Param('gyerekId', ParseIntPipe) gyerekId: number,
    @Param('jatekId', ParseIntPipe) jatekId: number,
  ) {
    return this.gyerekekService.addJatek(gyerekId, jatekId);
  }

  @Post()
  create(@Body() createGyerekekDto: CreateGyerekekDto) {
    return this.gyerekekService.create(createGyerekekDto);
  }

  @Get()
  findAll() {
    return this.gyerekekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gyerekekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGyerekekDto: UpdateGyerekekDto) {
    return this.gyerekekService.update(+id, updateGyerekekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gyerekekService.remove(+id);
  }
}
