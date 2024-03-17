import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { NewsService } from "./news.service";
import { NewsDto, NewsMutationResponseDto, NewsResponseDto } from "./news.dto";
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("News")
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiOkResponse({
    description: "OK",
    type: NewsResponseDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
	async getAll() {
		return this.newsService.getAll()
	}

  // @Get(':newsSlug')
  // @ApiOkResponse({
  //   description: "OK",
  //   type: NewsResponseDto,
  // })
  // @ApiNotFoundResponse({
  //   description: 'Not Found',
  // })
  // @ApiBadRequestResponse({ description: 'Bad Request' })
	// async getBySlug(@Param('newsSlug') newsSlug: string) {
	// 	return this.newsService.bySlug(newsSlug)
	// }

  @Get(':newsId')
  @Auth()
  @ApiOkResponse({
    description: "OK",
    type: NewsResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
	async getById(@Param('newsId') newsId: string) {
		return this.newsService.byId(+newsId)
	}

  @HttpCode(200)
  @Auth()
  @Post("create")
  @ApiOkResponse({
    description: "OK",
    type: NewsResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async create(@Body() newsDto: NewsDto) {
    return this.newsService.create(newsDto)
  }

	@UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':newsId')
  @ApiOkResponse({
    description: "OK",
    type: NewsMutationResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async update(@Param('newsId') newsId: string,
  @Body() dto: NewsDto) {
    return this.newsService.update(+newsId, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':newsId')
  @ApiOkResponse({
    description: "OK",
    type: NewsDto,
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async delete(@Param('newsId') newsId: string) {
    return this.newsService.delete(+newsId)
  }
}
