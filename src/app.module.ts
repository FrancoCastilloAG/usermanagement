import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, ConfigModule],
})
export class AppModule {}
//esta es una prueba de jenkins
