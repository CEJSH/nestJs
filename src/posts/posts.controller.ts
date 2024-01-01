import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author:string;
 * title: string;
 * content: string;
 * likeCount:number;
 * commentCount:number;
 */

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * get decorator에도 원하는 path 입력해주면 path에 맞게 endpoint를 mapping할 수 있다.
   */

  @Get()
  getPost(): Post {
    return {
      author: 'riize_official',
      title: 'love_119',
      content: 'teaser',
      likeCount: 10000000,
      commentCount: 99999,
    };
  }
}

// nest g resource -> 모듈생성 명령어
