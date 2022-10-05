import { PartialType } from '@nestjs/mapped-types';

import { CreateAdressDto } from './create-edress.dto';


export class UpdateEdressDto extends PartialType(CreateAdressDto) {};


