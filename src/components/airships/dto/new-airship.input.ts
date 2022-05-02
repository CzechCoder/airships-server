import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewAirshipInput {
  @Field()
  name: string;

  @Field(type => Int)
  @Max(1000)
  @Min(10, {message: "Set the daily price to at least 10."})
  dailyPrice: number;

  @Field(type => Int)
  @Max(15000)
  @Min(1500)
  monthlyPrice: number;

  @Field()
  capacity: string;

  @Field()
  gas: string;

  @Field()
  speed: string;

  @Field()
  thumbnailSrc: string;
}
