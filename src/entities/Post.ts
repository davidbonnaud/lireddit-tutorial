import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { OptionalProps } from '@mikro-orm/core';

@ObjectType()
@Entity()
export class Post {
  [OptionalProps]?: 'createdAt' | 'updatedAt';

  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({type: 'text'})
  title!: string;

}