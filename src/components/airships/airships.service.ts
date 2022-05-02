import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewAirshipInput } from './dto/new-airship.input';
import { Airship } from './entities/airship';

@Injectable()
export class AirshipsService {
  constructor(
    @InjectRepository(Airship) private airshipRepository: Repository<Airship>,
  ) {}

  public async getAirships(): Promise<Airship[]> {
    return await this.airshipRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }
  public async addAirship(newAirshipData: NewAirshipInput): Promise<Airship> {
    const newAirship = this.airshipRepository.create(newAirshipData);
    await this.airshipRepository.save(newAirship).catch((err)=> {
      new InternalServerErrorException();
    })
    return newAirship
  }
}
