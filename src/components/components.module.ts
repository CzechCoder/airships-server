import { Module } from "@nestjs/common";
import { AirshipsModule } from "./airships/airships.module";

@Module({
    imports: [AirshipsModule]
})
export class ComponentsModule {

}