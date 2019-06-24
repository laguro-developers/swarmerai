// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  project: (where?: ProjectWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  project: (where: ProjectWhereUniqueInput) => ProjectNullablePromise;
  projects: (args?: {
    where?: ProjectWhereInput;
    orderBy?: ProjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Project>;
  projectsConnection: (args?: {
    where?: ProjectWhereInput;
    orderBy?: ProjectOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProjectConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProject: (data: ProjectCreateInput) => ProjectPromise;
  updateProject: (args: {
    data: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
  }) => ProjectPromise;
  updateManyProjects: (args: {
    data: ProjectUpdateManyMutationInput;
    where?: ProjectWhereInput;
  }) => BatchPayloadPromise;
  upsertProject: (args: {
    where: ProjectWhereUniqueInput;
    create: ProjectCreateInput;
    update: ProjectUpdateInput;
  }) => ProjectPromise;
  deleteProject: (where: ProjectWhereUniqueInput) => ProjectPromise;
  deleteManyProjects: (where?: ProjectWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  project: (
    where?: ProjectSubscriptionWhereInput
  ) => ProjectSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProjectType = "CLASS" | "BINARY";

export type ProjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "validation_ASC"
  | "validation_DESC"
  | "bucketUrl_ASC"
  | "bucketUrl_DESC"
  | "category_ASC"
  | "category_DESC"
  | "currentJobId_ASC"
  | "currentJobId_DESC"
  | "type_ASC"
  | "type_DESC"
  | "repeatable_ASC"
  | "repeatable_DESC"
  | "question_ASC"
  | "question_DESC"
  | "width_ASC"
  | "width_DESC"
  | "height_ASC"
  | "height_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ProjectWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ProjectWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  validation?: Maybe<Int>;
  validation_not?: Maybe<Int>;
  validation_in?: Maybe<Int[] | Int>;
  validation_not_in?: Maybe<Int[] | Int>;
  validation_lt?: Maybe<Int>;
  validation_lte?: Maybe<Int>;
  validation_gt?: Maybe<Int>;
  validation_gte?: Maybe<Int>;
  bucketUrl?: Maybe<String>;
  bucketUrl_not?: Maybe<String>;
  bucketUrl_in?: Maybe<String[] | String>;
  bucketUrl_not_in?: Maybe<String[] | String>;
  bucketUrl_lt?: Maybe<String>;
  bucketUrl_lte?: Maybe<String>;
  bucketUrl_gt?: Maybe<String>;
  bucketUrl_gte?: Maybe<String>;
  bucketUrl_contains?: Maybe<String>;
  bucketUrl_not_contains?: Maybe<String>;
  bucketUrl_starts_with?: Maybe<String>;
  bucketUrl_not_starts_with?: Maybe<String>;
  bucketUrl_ends_with?: Maybe<String>;
  bucketUrl_not_ends_with?: Maybe<String>;
  category?: Maybe<String>;
  category_not?: Maybe<String>;
  category_in?: Maybe<String[] | String>;
  category_not_in?: Maybe<String[] | String>;
  category_lt?: Maybe<String>;
  category_lte?: Maybe<String>;
  category_gt?: Maybe<String>;
  category_gte?: Maybe<String>;
  category_contains?: Maybe<String>;
  category_not_contains?: Maybe<String>;
  category_starts_with?: Maybe<String>;
  category_not_starts_with?: Maybe<String>;
  category_ends_with?: Maybe<String>;
  category_not_ends_with?: Maybe<String>;
  currentJobId?: Maybe<String>;
  currentJobId_not?: Maybe<String>;
  currentJobId_in?: Maybe<String[] | String>;
  currentJobId_not_in?: Maybe<String[] | String>;
  currentJobId_lt?: Maybe<String>;
  currentJobId_lte?: Maybe<String>;
  currentJobId_gt?: Maybe<String>;
  currentJobId_gte?: Maybe<String>;
  currentJobId_contains?: Maybe<String>;
  currentJobId_not_contains?: Maybe<String>;
  currentJobId_starts_with?: Maybe<String>;
  currentJobId_not_starts_with?: Maybe<String>;
  currentJobId_ends_with?: Maybe<String>;
  currentJobId_not_ends_with?: Maybe<String>;
  type?: Maybe<ProjectType>;
  type_not?: Maybe<ProjectType>;
  type_in?: Maybe<ProjectType[] | ProjectType>;
  type_not_in?: Maybe<ProjectType[] | ProjectType>;
  repeatable?: Maybe<Boolean>;
  repeatable_not?: Maybe<Boolean>;
  question?: Maybe<String>;
  question_not?: Maybe<String>;
  question_in?: Maybe<String[] | String>;
  question_not_in?: Maybe<String[] | String>;
  question_lt?: Maybe<String>;
  question_lte?: Maybe<String>;
  question_gt?: Maybe<String>;
  question_gte?: Maybe<String>;
  question_contains?: Maybe<String>;
  question_not_contains?: Maybe<String>;
  question_starts_with?: Maybe<String>;
  question_not_starts_with?: Maybe<String>;
  question_ends_with?: Maybe<String>;
  question_not_ends_with?: Maybe<String>;
  width?: Maybe<Int>;
  width_not?: Maybe<Int>;
  width_in?: Maybe<Int[] | Int>;
  width_not_in?: Maybe<Int[] | Int>;
  width_lt?: Maybe<Int>;
  width_lte?: Maybe<Int>;
  width_gt?: Maybe<Int>;
  width_gte?: Maybe<Int>;
  height?: Maybe<Int>;
  height_not?: Maybe<Int>;
  height_in?: Maybe<Int[] | Int>;
  height_not_in?: Maybe<Int[] | Int>;
  height_lt?: Maybe<Int>;
  height_lte?: Maybe<Int>;
  height_gt?: Maybe<Int>;
  height_gte?: Maybe<Int>;
  AND?: Maybe<ProjectWhereInput[] | ProjectWhereInput>;
  OR?: Maybe<ProjectWhereInput[] | ProjectWhereInput>;
  NOT?: Maybe<ProjectWhereInput[] | ProjectWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface ProjectCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description: String;
  validation: Int;
  bucketUrl: String;
  category: String;
  currentJobId?: Maybe<String>;
  type?: Maybe<ProjectType>;
  repeatable?: Maybe<Boolean>;
  question?: Maybe<String>;
  classes?: Maybe<ProjectCreateclassesInput>;
  width?: Maybe<Int>;
  height?: Maybe<Int>;
}

export interface ProjectCreateclassesInput {
  set?: Maybe<String[] | String>;
}

export interface ProjectUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  validation?: Maybe<Int>;
  bucketUrl?: Maybe<String>;
  category?: Maybe<String>;
  currentJobId?: Maybe<String>;
  type?: Maybe<ProjectType>;
  repeatable?: Maybe<Boolean>;
  question?: Maybe<String>;
  classes?: Maybe<ProjectUpdateclassesInput>;
  width?: Maybe<Int>;
  height?: Maybe<Int>;
}

export interface ProjectUpdateclassesInput {
  set?: Maybe<String[] | String>;
}

export interface ProjectUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  validation?: Maybe<Int>;
  bucketUrl?: Maybe<String>;
  category?: Maybe<String>;
  currentJobId?: Maybe<String>;
  type?: Maybe<ProjectType>;
  repeatable?: Maybe<Boolean>;
  question?: Maybe<String>;
  classes?: Maybe<ProjectUpdateclassesInput>;
  width?: Maybe<Int>;
  height?: Maybe<Int>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  name: String;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  name?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  name?: Maybe<String>;
}

export interface ProjectSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProjectWhereInput>;
  AND?: Maybe<ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput>;
  OR?: Maybe<ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput>;
  NOT?: Maybe<ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Project {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name: String;
  description: String;
  validation: Int;
  bucketUrl: String;
  category: String;
  currentJobId?: String;
  type?: ProjectType;
  repeatable?: Boolean;
  question?: String;
  classes: String[];
  width?: Int;
  height?: Int;
}

export interface ProjectPromise extends Promise<Project>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  validation: () => Promise<Int>;
  bucketUrl: () => Promise<String>;
  category: () => Promise<String>;
  currentJobId: () => Promise<String>;
  type: () => Promise<ProjectType>;
  repeatable: () => Promise<Boolean>;
  question: () => Promise<String>;
  classes: () => Promise<String[]>;
  width: () => Promise<Int>;
  height: () => Promise<Int>;
}

export interface ProjectSubscription
  extends Promise<AsyncIterator<Project>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  validation: () => Promise<AsyncIterator<Int>>;
  bucketUrl: () => Promise<AsyncIterator<String>>;
  category: () => Promise<AsyncIterator<String>>;
  currentJobId: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<ProjectType>>;
  repeatable: () => Promise<AsyncIterator<Boolean>>;
  question: () => Promise<AsyncIterator<String>>;
  classes: () => Promise<AsyncIterator<String[]>>;
  width: () => Promise<AsyncIterator<Int>>;
  height: () => Promise<AsyncIterator<Int>>;
}

export interface ProjectNullablePromise
  extends Promise<Project | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  validation: () => Promise<Int>;
  bucketUrl: () => Promise<String>;
  category: () => Promise<String>;
  currentJobId: () => Promise<String>;
  type: () => Promise<ProjectType>;
  repeatable: () => Promise<Boolean>;
  question: () => Promise<String>;
  classes: () => Promise<String[]>;
  width: () => Promise<Int>;
  height: () => Promise<Int>;
}

export interface ProjectConnection {
  pageInfo: PageInfo;
  edges: ProjectEdge[];
}

export interface ProjectConnectionPromise
  extends Promise<ProjectConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProjectEdge>>() => T;
  aggregate: <T = AggregateProjectPromise>() => T;
}

export interface ProjectConnectionSubscription
  extends Promise<AsyncIterator<ProjectConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProjectSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProjectEdge {
  node: Project;
  cursor: String;
}

export interface ProjectEdgePromise extends Promise<ProjectEdge>, Fragmentable {
  node: <T = ProjectPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProjectEdgeSubscription
  extends Promise<AsyncIterator<ProjectEdge>>,
    Fragmentable {
  node: <T = ProjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProject {
  count: Int;
}

export interface AggregateProjectPromise
  extends Promise<AggregateProject>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProjectSubscription
  extends Promise<AsyncIterator<AggregateProject>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType;
  node: Project;
  updatedFields: String[];
  previousValues: ProjectPreviousValues;
}

export interface ProjectSubscriptionPayloadPromise
  extends Promise<ProjectSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProjectPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProjectPreviousValuesPromise>() => T;
}

export interface ProjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProjectSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProjectPreviousValuesSubscription>() => T;
}

export interface ProjectPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name: String;
  description: String;
  validation: Int;
  bucketUrl: String;
  category: String;
  currentJobId?: String;
  type?: ProjectType;
  repeatable?: Boolean;
  question?: String;
  classes: String[];
  width?: Int;
  height?: Int;
}

export interface ProjectPreviousValuesPromise
  extends Promise<ProjectPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  validation: () => Promise<Int>;
  bucketUrl: () => Promise<String>;
  category: () => Promise<String>;
  currentJobId: () => Promise<String>;
  type: () => Promise<ProjectType>;
  repeatable: () => Promise<Boolean>;
  question: () => Promise<String>;
  classes: () => Promise<String[]>;
  width: () => Promise<Int>;
  height: () => Promise<Int>;
}

export interface ProjectPreviousValuesSubscription
  extends Promise<AsyncIterator<ProjectPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  validation: () => Promise<AsyncIterator<Int>>;
  bucketUrl: () => Promise<AsyncIterator<String>>;
  category: () => Promise<AsyncIterator<String>>;
  currentJobId: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<ProjectType>>;
  repeatable: () => Promise<AsyncIterator<Boolean>>;
  question: () => Promise<AsyncIterator<String>>;
  classes: () => Promise<AsyncIterator<String[]>>;
  width: () => Promise<AsyncIterator<Int>>;
  height: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Project",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "ProjectType",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
