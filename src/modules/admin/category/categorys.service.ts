import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './interface/category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category')
    private readonly CategoryModel: Model<Category>,
  ) {}

  async getCategoryByType(type: string): Promise<Category[]> {
    return this.CategoryModel.find({ type }).exec();
  }
}
