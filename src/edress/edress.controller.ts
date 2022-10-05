import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdressService } from './edress.service';
import { CreateAdressDto } from './edressDto/create-edress.dto';
import { UpdateEdressDto } from './edressDto/update-edress.dto';

@Controller('adress')
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @Post()
  create(@Body() createAdressDto: CreateAdressDto) {
    return this.adressService.create(createAdressDto);
  }

  @Get()
  findAll() {
    return this.adressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adressService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateadressDto: UpdateEdressDto) {
    return this.adressService.update(id, updateadressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adressService.remove(id);
  }
}
