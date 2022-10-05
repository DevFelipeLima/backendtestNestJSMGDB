import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdressModule } from './edress/edress.model';
//mongodb+srv://DevFelipeLima:NJJdul7myGf7OkZN@cluster0.zkon8bg.mongodb.net/test
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://DevFelipeLima:NJJdul7myGf7OkZN@cluster0.zkon8bg.mongodb.net/test'),
    UserModule, AdressModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
