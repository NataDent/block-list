import { Module } from '@nestjs/common';
import { BlockListController } from './dto';
import { BlockListService } from './block-list.service';

@Module( {
  controllers: [ BlockListController ],
  providers: [ BlockListService ]
} )
export class BlockListModule { }
