import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongoConfig';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule, 
    TopPageModule, 
    ProductModule, 
    ReviewModule, 
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService ],
      useFactory: getMongoConfig
    }),
    UsersModule  
  ],

})
export class AppModule {}
