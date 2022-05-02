import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AirshipsService } from "./airships.service";
import { NewAirshipInput } from "./dto/new-airship.input";
import { Airship } from "./entities/airship";

@Resolver()
export class AirshipsResolver {
    constructor(private airshipsService: AirshipsService) {

    }
    @Query(returns => [Airship])
    public async airships(): Promise<Airship[]> {
        return await this.airshipsService.getAirships().catch((err)=> {
            throw err;
        })

    }

    @Mutation(returns => Airship)
    public async addNewAirship(@Args("newAirshipData") newAirshipData: NewAirshipInput): Promise<Airship> {
        return await this.airshipsService.addAirship(newAirshipData).catch((err)=>{
            throw err;
        })
    }
}