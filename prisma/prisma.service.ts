import { OnModuleDestroy, OnModuleInit, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    async onModuleInit() {     
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    } 
}

export default PrismaService;