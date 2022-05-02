import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirshipsResolver } from './airships.resolver';
import { AirshipsService } from './airships.service';
import { Airship } from './entities/airship';

@Module({
  imports: [TypeOrmModule.forFeature([Airship])],
  providers: [AirshipsService, AirshipsResolver],
  exports: [AirshipsService],
})
export class AirshipsModule {}
