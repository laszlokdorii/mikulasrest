import { Injectable } from '@nestjs/common';
import { CreateJatekokDto } from './dto/create-jatekok.dto';
import { UpdateJatekokDto } from './dto/update-jatekok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekokService {
db:PrismaService

  constructor(db:PrismaService){
    this.db=db
  }
  create(createJatekokDto: CreateJatekokDto) {
    return this.db.jatek.create({
      data:createJatekokDto
    });
  }

  findAll() {
    return this.db.jatek.findMany();
  }

  findOne(id: number) {
    return this.db.jatek.findUnique({
      where: {
        id:id
      }
    });
  }

  update(id: number, updateJatekokDto: UpdateJatekokDto) {
    return this.db.jatek.update({
      where:{
        id:id
      },
      data:updateJatekokDto
    });
  }

  remove(id: number) {
    return this.db.jatek.delete({
      where:{
        id:id
      }
    });
  }
}
