import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModule } from './components/components.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot(config), GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: true,
      driver: ApolloDriver
    }),
    ComponentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
