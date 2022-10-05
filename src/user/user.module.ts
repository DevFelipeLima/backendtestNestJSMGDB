import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Client, ClientSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([{name:Client.name, schema: ClientSchema},]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
