import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Client, ClientDocument } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>){}
  create(createUserDto: CreateUserDto) {
    const client = new this.clientModel(createUserDto)
    return client.save();
  }

  findAll() {
    return this.clientModel.find();
  }

  findOne(id: string) {
    return this.clientModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.clientModel.findByIdAndUpdate(
      {
        _id: id
      },{
        $set: updateUserDto
      },{
        new: true
      }
    );
  }

  remove(id: string) {
    return this.clientModel.deleteOne({
    _id:id
    })
    .exec();
  }
}
