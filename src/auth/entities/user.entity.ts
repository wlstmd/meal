import { Post } from 'src/post/entities/post.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loginType: 'email';

  @Column({ default: '경북소프트웨어고등학교' })
  schoolName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  nickname?: string;

  @Column({ nullable: true })
  imageUri?: string;

  @Column({ nullable: true })
  hashedRefreshToken?: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
