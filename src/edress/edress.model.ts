import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Adress, AdressSchema } from 'src/user/entities/edress.entity';
import { AdressController } from './edress.controller';
import { AdressService } from './edress.service';


@Module({
  imports: [
    MongooseModule.forFeature([{name:Adress.name, schema:AdressSchema}]),
  ],
  controllers: [AdressController],
  providers: [AdressService]
})
export class AdressModule {}