import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';


class ProductCharacteristic {
	@prop()
	name: string;

	@prop()
	value: string;
}

export interface ProductModel extends Base{}
export class ProductModel extends TimeStamps{

	@prop()
	userLogin: string;
	
	@prop()
	image: string;

	@prop()
	title: string;

	@prop()
	price: number;

	@prop()
	oldPrice: number;

	@prop()
	creadit: number;

	@prop()
	calculatedRating: number;

	@prop()
	descriptions: string;

	@prop()
	advanatges: string;

	@prop()
	disAdvantages: string;

	@prop({type: () => [String]})
	categories: string[];

	@prop({ type: () => [String] })
	tags: string[];

	@prop({type: () => [ProductCharacteristic], _id: false})
	characteristics: ProductCharacteristic[];

}