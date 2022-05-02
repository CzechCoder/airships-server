import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'airships'})
@ObjectType()
export class Airship {
    @PrimaryGeneratedColumn("uuid")
    @Field()
    id: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    dailyPrice: number;

    @Column()
    @Field()
    monthlyPrice: number;

    @Column()
    @Field()
    capacity: string;

    @Column()
    @Field()
    gas: string;

    @Column()
    @Field()
    speed: string;

    @Column()
    @Field()
    thumbnailSrc: string;
}