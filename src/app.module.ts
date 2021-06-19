import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.mongodb_uri),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
