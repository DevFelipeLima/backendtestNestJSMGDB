import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdressDto } from './edressDto/create-edress.dto';
import { UpdateEdressDto } from './edressDto/update-edress.dto';
import { Adress, AdressDocument } from '../user/entities/edress.entity';

@Injectable()
export class AdressService {

  constructor(@InjectModel(Adress.name) private adressModel: Model<AdressDocument>){}
  create(createAdressDto: CreateAdressDto) {
    const adress = new this.adressModel(createAdressDto)
    return adress.save();
  }

  findAll() {
    return this.adressModel.find();
  }

  findOne(id: string) {
    return this.adressModel.findById(id);
  }

  update(id: string, updateAdressDto: UpdateEdressDto) {
    return this.adressModel.findByIdAndUpdate(
      {
        _id: id
      },{
        $set: updateAdressDto
      },{
        new: true
      }
    );
  }

  remove(id: string) {
    return this.adressModel.deleteOne({
    _id:id
    })
    .exec();
  }
}
