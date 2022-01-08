import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  userModel: any;
  constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
  }
  findAll() {
    return 'This action returns all users';
  }
  findOne(id: number) {
    return 'This actions returns #${id} user';
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return 'This action updates a #${id} user';
  }

}



