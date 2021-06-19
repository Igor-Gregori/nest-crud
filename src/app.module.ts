import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'sua string de conexão',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}