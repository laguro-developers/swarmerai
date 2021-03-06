module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCategory {
  count: Int!
}

type AggregateJob {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  id: ID
  name: String
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type CategoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateInput {
  name: String
}

input CategoryUpdateManyMutationInput {
  name: String
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar DateTime

type Job {
  id: ID!
  projectId: String!
  startDateTime: DateTime!
  status: ProjectStatus
  endDateTime: DateTime
  fileIds: [String!]!
  description: String!
  validation: Int!
  bucketName: String!
  category: String!
  type: ProjectType!
  repeatable: Boolean!
  question: String!
  classes: [String!]!
  width: Int!
  height: Int!
  expectedSubmissions: Int
}

type JobConnection {
  pageInfo: PageInfo!
  edges: [JobEdge]!
  aggregate: AggregateJob!
}

input JobCreateclassesInput {
  set: [String!]
}

input JobCreatefileIdsInput {
  set: [String!]
}

input JobCreateInput {
  id: ID
  projectId: String!
  status: ProjectStatus
  endDateTime: DateTime
  fileIds: JobCreatefileIdsInput
  description: String!
  validation: Int!
  bucketName: String!
  category: String!
  type: ProjectType!
  repeatable: Boolean!
  question: String!
  classes: JobCreateclassesInput
  width: Int!
  height: Int!
  expectedSubmissions: Int
}

type JobEdge {
  node: Job!
  cursor: String!
}

enum JobOrderByInput {
  id_ASC
  id_DESC
  projectId_ASC
  projectId_DESC
  startDateTime_ASC
  startDateTime_DESC
  status_ASC
  status_DESC
  endDateTime_ASC
  endDateTime_DESC
  description_ASC
  description_DESC
  validation_ASC
  validation_DESC
  bucketName_ASC
  bucketName_DESC
  category_ASC
  category_DESC
  type_ASC
  type_DESC
  repeatable_ASC
  repeatable_DESC
  question_ASC
  question_DESC
  width_ASC
  width_DESC
  height_ASC
  height_DESC
  expectedSubmissions_ASC
  expectedSubmissions_DESC
}

type JobPreviousValues {
  id: ID!
  projectId: String!
  startDateTime: DateTime!
  status: ProjectStatus
  endDateTime: DateTime
  fileIds: [String!]!
  description: String!
  validation: Int!
  bucketName: String!
  category: String!
  type: ProjectType!
  repeatable: Boolean!
  question: String!
  classes: [String!]!
  width: Int!
  height: Int!
  expectedSubmissions: Int
}

type JobSubscriptionPayload {
  mutation: MutationType!
  node: Job
  updatedFields: [String!]
  previousValues: JobPreviousValues
}

input JobSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JobWhereInput
  AND: [JobSubscriptionWhereInput!]
  OR: [JobSubscriptionWhereInput!]
  NOT: [JobSubscriptionWhereInput!]
}

input JobUpdateclassesInput {
  set: [String!]
}

input JobUpdatefileIdsInput {
  set: [String!]
}

input JobUpdateInput {
  projectId: String
  status: ProjectStatus
  endDateTime: DateTime
  fileIds: JobUpdatefileIdsInput
  description: String
  validation: Int
  bucketName: String
  category: String
  type: ProjectType
  repeatable: Boolean
  question: String
  classes: JobUpdateclassesInput
  width: Int
  height: Int
  expectedSubmissions: Int
}

input JobUpdateManyMutationInput {
  projectId: String
  status: ProjectStatus
  endDateTime: DateTime
  fileIds: JobUpdatefileIdsInput
  description: String
  validation: Int
  bucketName: String
  category: String
  type: ProjectType
  repeatable: Boolean
  question: String
  classes: JobUpdateclassesInput
  width: Int
  height: Int
  expectedSubmissions: Int
}

input JobWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  projectId: String
  projectId_not: String
  projectId_in: [String!]
  projectId_not_in: [String!]
  projectId_lt: String
  projectId_lte: String
  projectId_gt: String
  projectId_gte: String
  projectId_contains: String
  projectId_not_contains: String
  projectId_starts_with: String
  projectId_not_starts_with: String
  projectId_ends_with: String
  projectId_not_ends_with: String
  startDateTime: DateTime
  startDateTime_not: DateTime
  startDateTime_in: [DateTime!]
  startDateTime_not_in: [DateTime!]
  startDateTime_lt: DateTime
  startDateTime_lte: DateTime
  startDateTime_gt: DateTime
  startDateTime_gte: DateTime
  status: ProjectStatus
  status_not: ProjectStatus
  status_in: [ProjectStatus!]
  status_not_in: [ProjectStatus!]
  endDateTime: DateTime
  endDateTime_not: DateTime
  endDateTime_in: [DateTime!]
  endDateTime_not_in: [DateTime!]
  endDateTime_lt: DateTime
  endDateTime_lte: DateTime
  endDateTime_gt: DateTime
  endDateTime_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  validation: Int
  validation_not: Int
  validation_in: [Int!]
  validation_not_in: [Int!]
  validation_lt: Int
  validation_lte: Int
  validation_gt: Int
  validation_gte: Int
  bucketName: String
  bucketName_not: String
  bucketName_in: [String!]
  bucketName_not_in: [String!]
  bucketName_lt: String
  bucketName_lte: String
  bucketName_gt: String
  bucketName_gte: String
  bucketName_contains: String
  bucketName_not_contains: String
  bucketName_starts_with: String
  bucketName_not_starts_with: String
  bucketName_ends_with: String
  bucketName_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  type: ProjectType
  type_not: ProjectType
  type_in: [ProjectType!]
  type_not_in: [ProjectType!]
  repeatable: Boolean
  repeatable_not: Boolean
  question: String
  question_not: String
  question_in: [String!]
  question_not_in: [String!]
  question_lt: String
  question_lte: String
  question_gt: String
  question_gte: String
  question_contains: String
  question_not_contains: String
  question_starts_with: String
  question_not_starts_with: String
  question_ends_with: String
  question_not_ends_with: String
  width: Int
  width_not: Int
  width_in: [Int!]
  width_not_in: [Int!]
  width_lt: Int
  width_lte: Int
  width_gt: Int
  width_gte: Int
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  expectedSubmissions: Int
  expectedSubmissions_not: Int
  expectedSubmissions_in: [Int!]
  expectedSubmissions_not_in: [Int!]
  expectedSubmissions_lt: Int
  expectedSubmissions_lte: Int
  expectedSubmissions_gt: Int
  expectedSubmissions_gte: Int
  AND: [JobWhereInput!]
  OR: [JobWhereInput!]
  NOT: [JobWhereInput!]
}

input JobWhereUniqueInput {
  id: ID
}

scalar Json

scalar Long

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createJob(data: JobCreateInput!): Job!
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateManyJobs(data: JobUpdateManyMutationInput!, where: JobWhereInput): BatchPayload!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  creator: User!
  name: String!
  description: String!
  validation: Int!
  bucketName: String!
  category: String!
  type: ProjectType
  repeatable: Boolean!
  question: String
  classes: [String!]!
  width: Int
  height: Int
  status: ProjectStatus
  currentJobId: String
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateclassesInput {
  set: [String!]
}

input ProjectCreateInput {
  id: ID
  creator: UserCreateOneInput!
  name: String!
  description: String!
  validation: Int!
  bucketName: String!
  category: String!
  type: ProjectType
  repeatable: Boolean
  question: String
  classes: ProjectCreateclassesInput
  width: Int
  height: Int
  status: ProjectStatus
  currentJobId: String
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  validation_ASC
  validation_DESC
  bucketName_ASC
  bucketName_DESC
  category_ASC
  category_DESC
  type_ASC
  type_DESC
  repeatable_ASC
  repeatable_DESC
  question_ASC
  question_DESC
  width_ASC
  width_DESC
  height_ASC
  height_DESC
  status_ASC
  status_DESC
  currentJobId_ASC
  currentJobId_DESC
}

type ProjectPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String!
  validation: Int!
  bucketName: String!
  category: String!
  type: ProjectType
  repeatable: Boolean!
  question: String
  classes: [String!]!
  width: Int
  height: Int
  status: ProjectStatus
  currentJobId: String
}

enum ProjectStatus {
  PENDING
  ACTIVE
  COMPLETED
  DELETED
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

enum ProjectType {
  MULTI_CLASS
  BINARY
}

input ProjectUpdateclassesInput {
  set: [String!]
}

input ProjectUpdateInput {
  creator: UserUpdateOneRequiredInput
  name: String
  description: String
  validation: Int
  bucketName: String
  category: String
  type: ProjectType
  repeatable: Boolean
  question: String
  classes: ProjectUpdateclassesInput
  width: Int
  height: Int
  status: ProjectStatus
  currentJobId: String
}

input ProjectUpdateManyMutationInput {
  name: String
  description: String
  validation: Int
  bucketName: String
  category: String
  type: ProjectType
  repeatable: Boolean
  question: String
  classes: ProjectUpdateclassesInput
  width: Int
  height: Int
  status: ProjectStatus
  currentJobId: String
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  creator: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  validation: Int
  validation_not: Int
  validation_in: [Int!]
  validation_not_in: [Int!]
  validation_lt: Int
  validation_lte: Int
  validation_gt: Int
  validation_gte: Int
  bucketName: String
  bucketName_not: String
  bucketName_in: [String!]
  bucketName_not_in: [String!]
  bucketName_lt: String
  bucketName_lte: String
  bucketName_gt: String
  bucketName_gte: String
  bucketName_contains: String
  bucketName_not_contains: String
  bucketName_starts_with: String
  bucketName_not_starts_with: String
  bucketName_ends_with: String
  bucketName_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  type: ProjectType
  type_not: ProjectType
  type_in: [ProjectType!]
  type_not_in: [ProjectType!]
  repeatable: Boolean
  repeatable_not: Boolean
  question: String
  question_not: String
  question_in: [String!]
  question_not_in: [String!]
  question_lt: String
  question_lte: String
  question_gt: String
  question_gte: String
  question_contains: String
  question_not_contains: String
  question_starts_with: String
  question_not_starts_with: String
  question_ends_with: String
  question_not_ends_with: String
  width: Int
  width_not: Int
  width_in: [Int!]
  width_not_in: [Int!]
  width_lt: Int
  width_lte: Int
  width_gt: Int
  width_gte: Int
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  status: ProjectStatus
  status_not: ProjectStatus
  status_in: [ProjectStatus!]
  status_not_in: [ProjectStatus!]
  currentJobId: String
  currentJobId_not: String
  currentJobId_in: [String!]
  currentJobId_not_in: [String!]
  currentJobId_lt: String
  currentJobId_lte: String
  currentJobId_gt: String
  currentJobId_gte: String
  currentJobId_contains: String
  currentJobId_not_contains: String
  currentJobId_starts_with: String
  currentJobId_not_starts_with: String
  currentJobId_ends_with: String
  currentJobId_not_ends_with: String
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  job(where: JobWhereUniqueInput!): Job
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Task {
  id: ID!
  jobId: String!
  userId: String!
  fileId: String!
  jobIdAndFileId: String!
  type: ProjectType
  labels: Json
}

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  id: ID
  jobId: String!
  userId: String!
  fileId: String!
  jobIdAndFileId: String!
  type: ProjectType
  labels: Json
}

type TaskEdge {
  node: Task!
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  jobId_ASC
  jobId_DESC
  userId_ASC
  userId_DESC
  fileId_ASC
  fileId_DESC
  jobIdAndFileId_ASC
  jobIdAndFileId_DESC
  type_ASC
  type_DESC
  labels_ASC
  labels_DESC
}

type TaskPreviousValues {
  id: ID!
  jobId: String!
  userId: String!
  fileId: String!
  jobIdAndFileId: String!
  type: ProjectType
  labels: Json
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateInput {
  jobId: String
  userId: String
  fileId: String
  jobIdAndFileId: String
  type: ProjectType
  labels: Json
}

input TaskUpdateManyMutationInput {
  jobId: String
  userId: String
  fileId: String
  jobIdAndFileId: String
  type: ProjectType
  labels: Json
}

input TaskWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  jobId: String
  jobId_not: String
  jobId_in: [String!]
  jobId_not_in: [String!]
  jobId_lt: String
  jobId_lte: String
  jobId_gt: String
  jobId_gte: String
  jobId_contains: String
  jobId_not_contains: String
  jobId_starts_with: String
  jobId_not_starts_with: String
  jobId_ends_with: String
  jobId_not_ends_with: String
  userId: String
  userId_not: String
  userId_in: [String!]
  userId_not_in: [String!]
  userId_lt: String
  userId_lte: String
  userId_gt: String
  userId_gte: String
  userId_contains: String
  userId_not_contains: String
  userId_starts_with: String
  userId_not_starts_with: String
  userId_ends_with: String
  userId_not_ends_with: String
  fileId: String
  fileId_not: String
  fileId_in: [String!]
  fileId_not_in: [String!]
  fileId_lt: String
  fileId_lte: String
  fileId_gt: String
  fileId_gte: String
  fileId_contains: String
  fileId_not_contains: String
  fileId_starts_with: String
  fileId_not_starts_with: String
  fileId_ends_with: String
  fileId_not_ends_with: String
  jobIdAndFileId: String
  jobIdAndFileId_not: String
  jobIdAndFileId_in: [String!]
  jobIdAndFileId_not_in: [String!]
  jobIdAndFileId_lt: String
  jobIdAndFileId_lte: String
  jobIdAndFileId_gt: String
  jobIdAndFileId_gte: String
  jobIdAndFileId_contains: String
  jobIdAndFileId_not_contains: String
  jobIdAndFileId_starts_with: String
  jobIdAndFileId_not_starts_with: String
  jobIdAndFileId_ends_with: String
  jobIdAndFileId_not_ends_with: String
  type: ProjectType
  type_not: ProjectType
  type_in: [ProjectType!]
  type_not_in: [ProjectType!]
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    