// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';

import * as protobuf from '../../../../contrib/google/protobuf';
import * as operation from '../../../../api/operation';

export interface Function {
  id?: string;

  folderId?: string;

  createdAt?: protobuf.Timestamp;

  name?: string;

  description?: string;

  labels?: { [s: string]: string };

  logGroupId?: string;

  httpInvokeUrl?: string;
}

export interface Version {
  id?: string;

  functionId?: string;

  description?: string;

  createdAt?: protobuf.Timestamp;

  runtime?: string;

  entrypoint?: string;

  resources?: Resources;

  executionTimeout?: protobuf.Duration;

  serviceAccountId?: string;

  imageSize?: Long;

  status?: Version.Status;

  tags?: string[];

  logGroupId?: string;

  environment?: { [s: string]: string };
}

export namespace Version {
  export enum Status {
    STATUS_UNSPECIFIED = 0,

    CREATING = 1,

    ACTIVE = 2
  }
}

export interface Resources {
  memory?: Long;
}

export interface Package {
  bucketName: string;

  objectName: string;

  sha256?: string;
}

export class FunctionService {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(request: GetFunctionRequest): Promise<Function>;

  list(request: ListFunctionsRequest): Promise<ListFunctionsResponse>;

  create(request: CreateFunctionRequest): Promise<operation.Operation>;

  update(request: UpdateFunctionRequest): Promise<operation.Operation>;

  delete(request: DeleteFunctionRequest): Promise<operation.Operation>;

  getFunctionVersion(request: GetFunctionVersionRequest): Promise<Version>;

  getFunctionVersionByTag(request: GetFunctionVersionByTagRequest): Promise<Version>;

  listFunctionVersions(request: ListFunctionsVersionsRequest): Promise<ListFunctionsVersionsResponse>;

  setTag(request: SetFunctionTagRequest): Promise<operation.Operation>;

  removeTag(request: RemoveFunctionTagRequest): Promise<operation.Operation>;

  listFunctionTagHistory(request: ListFunctionTagHistoryRequest): Promise<ListFunctionTagHistoryResponse>;

  createFunctionVersion(request: CreateFunctionVersionRequest): Promise<operation.Operation>;

  listRuntimes(request: ListRuntimesRequest): Promise<ListRuntimesResponse>;

  listOperations(request: ListFunctionOperationsRequest): Promise<ListFunctionOperationsResponse>;
}

export interface GetFunctionRequest {
  functionId: string;
}

export interface GetFunctionVersionRequest {
  functionVersionId: string;
}

export interface GetFunctionVersionByTagRequest {
  functionId: string;

  tag?: string;
}

export interface ListFunctionsRequest {
  folderId: string;

  pageSize?: Long;

  pageToken?: string;

  filter?: string;
}

export interface ListFunctionsResponse {
  functions?: Function[];

  nextPageToken?: string;
}

export interface CreateFunctionRequest {
  folderId: string;

  name?: string;

  description?: string;

  labels?: { [s: string]: string };
}

export interface CreateFunctionMetadata {
  functionId?: string;
}

export interface UpdateFunctionRequest {
  functionId: string;

  updateMask?: protobuf.FieldMask;

  name?: string;

  description?: string;

  labels?: { [s: string]: string };
}

export interface UpdateFunctionMetadata {
  functionId?: string;
}

export interface DeleteFunctionRequest {
  functionId: string;
}

export interface DeleteFunctionMetadata {
  functionId?: string;
}

export interface ListRuntimesRequest {}

export interface ListRuntimesResponse {
  runtimes?: string[];
}

export interface ListFunctionsVersionsRequest {
  folderId?: string;

  functionId?: string;

  pageSize?: Long;

  pageToken?: string;

  filter?: string;
}

export interface ListFunctionsVersionsResponse {
  versions?: Version[];

  nextPageToken?: string;
}

export interface ListFunctionOperationsRequest {
  functionId: string;

  pageSize?: Long;

  pageToken?: string;

  filter?: string;
}

export interface ListFunctionOperationsResponse {
  operations?: operation.Operation[];

  nextPageToken?: string;
}

export interface CreateFunctionVersionRequest {
  functionId: string;

  runtime: string;

  description?: string;

  entrypoint: string;

  resources: Resources;

  executionTimeout: protobuf.Duration;

  serviceAccountId?: string;

  package?: Package;

  content?: Buffer;

  environment?: { [s: string]: string };
}

export interface CreateFunctionVersionMetadata {
  functionVersionId?: string;
}

export interface SetFunctionTagRequest {
  functionVersionId: string;

  tag?: string;
}

export interface RemoveFunctionTagRequest {
  functionVersionId: string;

  tag?: string;
}

export interface SetFunctionTagMetadata {
  functionVersionId?: string;
}

export interface RemoveFunctionTagMetadata {
  functionVersionId?: string;
}

export interface ListFunctionTagHistoryRequest {
  functionId: string;

  tag?: string;

  pageSize?: Long;

  pageToken?: string;

  filter?: string;
}

export interface ListFunctionTagHistoryResponse {
  functionTagHistoryRecord?: ListFunctionTagHistoryResponse.FunctionTagHistoryRecord[];

  nextPageToken?: string;
}

export namespace ListFunctionTagHistoryResponse {
  export interface FunctionTagHistoryRecord {
    functionId?: string;

    functionVersionId?: string;

    tag?: string;

    effectiveFrom?: protobuf.Timestamp;

    effectiveTo?: protobuf.Timestamp;
  }
}
