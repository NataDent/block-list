import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { AccountService } from './account.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';

@Controller( 'account' )
@UseGuards( AuthGuard )
export class AccountController {
    constructor( private accountService: AccountService ) { }

    @Get()
    @ApiOkResponse( {
        type: AccountDto,
    } )
    getAccount( @SessionInfo() session: GetSessionInfoDto ): Promise<AccountDto> {
        return this.accountService.getAccount( session.id );
    }

    @Patch()
    @ApiOkResponse( {
        type: AccountDto,
    } )
    patchAccount(
        @Body() body: PatchAccountDto,
        @SessionInfo() session: GetSessionInfoDto ): Promise<AccountDto> {
        return this.accountService.patchAccount( session.id, body );
    }

}
