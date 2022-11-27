import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { OptionalProps } from '@mikro-orm/core';

@Entity()
export class Post {
  [OptionalProps]?: 'createdAt' | 'updatedAt';

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({type: 'text'})
  title!: string;

}