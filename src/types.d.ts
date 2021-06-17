import { PrismaClient, User } from '@prisma/client';

export type Context = {
  prismaClient: PrismaClient;
  loggedInUser?: User;
};

export type Resolver = (
  root: any,
  args: any,
  context: Context,
  info: any
) => any;

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver;
  };
};
