// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';

import * as protobuf from '../../../contrib/google/protobuf';
import * as operation from '../../../api/operation';
import * as access from '../../../api/access';

/**
 * A Cloud resource. For more information, see [Cloud](/docs/resource-manager/concepts/resources-hierarchy#cloud).
 */
export interface Cloud {
  /**
   * ID of the cloud.
   */
  id?: string;

  /**
   * Creation timestamp.
   */
  createdAt?: protobuf.Timestamp;

  /**
   * Name of the cloud. 3-63 characters long.
   */
  name?: string;

  /**
   * Description of the cloud. 0-256 characters long.
   */
  description?: string;
}

/**
 * A set of methods for managing Cloud resources.
 */
export class CloudService {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  /**
   * Returns the specified Cloud resource.
   *
   * To get the list of available Cloud resources, make a [List] request.
   */
  get(request: GetCloudRequest): Promise<Cloud>;

  /**
   * Retrieves the list of Cloud resources.
   */
  list(request: ListCloudsRequest): Promise<ListCloudsResponse>;

  /**
   * Updates the specified cloud.
   */
  update(request: UpdateCloudRequest): Promise<operation.Operation>;

  /**
   * Lists operations for the specified cloud.
   */
  listOperations(request: ListCloudOperationsRequest): Promise<ListCloudOperationsResponse>;

  /**
   * Lists access bindings for the specified cloud.
   */
  listAccessBindings(request: access.ListAccessBindingsRequest): Promise<access.ListAccessBindingsResponse>;

  /**
   * Sets access bindings for the specified cloud.
   */
  setAccessBindings(request: access.SetAccessBindingsRequest): Promise<operation.Operation>;

  /**
   * Updates access bindings for the specified cloud.
   */
  updateAccessBindings(request: access.UpdateAccessBindingsRequest): Promise<operation.Operation>;
}

export interface GetCloudRequest {
  /**
   * ID of the Cloud resource to return.
   * To get the cloud ID, use a [CloudService.List] request.
   */
  cloudId: string;
}

export interface ListCloudsRequest {
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListCloudsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize?: Long;

  /**
   * Page token. Set [page_token]
   * to the [ListCloudsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken?: string;

  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Cloud.name] field.
   * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
   */
  filter?: string;
}

export interface ListCloudsResponse {
  /**
   * List of Cloud resources.
   */
  clouds?: Cloud[];

  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCloudsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListCloudsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken?: string;
}

export interface ListCloudOperationsRequest {
  /**
   * ID of the Cloud resource to list operations for.
   */
  cloudId: string;

  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListCloudOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize?: Long;

  /**
   * Page token. Set [page_token]
   * to the [ListCloudOperationsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken?: string;
}

export interface ListCloudOperationsResponse {
  /**
   * List of operations for the specified cloud.
   */
  operations?: operation.Operation[];

  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCloudOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListCloudOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken?: string;
}

export interface UpdateCloudRequest {
  /**
   * ID of the cloud to update.
   * To get the cloud ID, use a [CloudService.List] request.
   */
  cloudId: string;

  /**
   * Field mask that specifies which fields of the cloud are going to be updated.
   */
  updateMask?: protobuf.FieldMask;

  /**
   * Name of the cloud.
   */
  name?: string;

  /**
   * Description of the cloud.
   */
  description?: string;
}

export interface UpdateCloudMetadata {
  /**
   * ID of the cloud that is being updated.
   */
  cloudId?: string;
}

/**
 * A Folder resource. For more information, see [Folder](/docs/resource-manager/concepts/resources-hierarchy#folder).
 */
export interface Folder {
  /**
   * ID of the folder.
   */
  id?: string;

  /**
   * ID of the cloud that the folder belongs to.
   */
  cloudId?: string;

  /**
   * Creation timestamp.
   */
  createdAt?: protobuf.Timestamp;

  /**
   * Name of the folder.
   * The name is unique within the cloud. 3-63 characters long.
   */
  name?: string;

  /**
   * Description of the folder. 0-256 characters long.
   */
  description?: string;

  /**
   * Resource labels as `` key:value `` pairs. Мaximum of 64 per resource.
   */
  labels?: { [s: string]: string };

  /**
   * Status of the folder.
   */
  status?: Folder.Status;
}

export namespace Folder {
  export enum Status {
    STATUS_UNSPECIFIED = 0,

    /**
     * The folder is active.
     */
    ACTIVE = 1,

    /**
     * The folder is being deleted.
     */
    DELETING = 2
  }
}

/**
 * A set of methods for managing Folder resources.
 */
export class FolderService {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  /**
   * Returns the specified Folder resource.
   *
   * To get the list of available Folder resources, make a [List] request.
   */
  get(request: GetFolderRequest): Promise<Folder>;

  /**
   * Retrieves the list of Folder resources in the specified cloud.
   */
  list(request: ListFoldersRequest): Promise<ListFoldersResponse>;

  /**
   * Creates a folder in the specified cloud.
   */
  create(request: CreateFolderRequest): Promise<operation.Operation>;

  /**
   * Updates the specified folder.
   */
  update(request: UpdateFolderRequest): Promise<operation.Operation>;

  /**
   * Deletes the specified folder.
   *
   * The method is temporarily unavailable.
   */
  delete(request: DeleteFolderRequest): Promise<operation.Operation>;

  /**
   * Lists operations for the specified folder.
   */
  listOperations(request: ListFolderOperationsRequest): Promise<ListFolderOperationsResponse>;

  /**
   * Lists access bindings for the specified folder.
   */
  listAccessBindings(request: access.ListAccessBindingsRequest): Promise<access.ListAccessBindingsResponse>;

  /**
   * Sets access bindings for the specified folder.
   */
  setAccessBindings(request: access.SetAccessBindingsRequest): Promise<operation.Operation>;

  /**
   * Updates access bindings for the specified folder.
   */
  updateAccessBindings(request: access.UpdateAccessBindingsRequest): Promise<operation.Operation>;
}

export interface GetFolderRequest {
  /**
   * ID of the Folder resource to return.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
}

export interface ListFoldersRequest {
  /**
   * ID of the cloud to list folders in.
   * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
   */
  cloudId: string;

  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListFoldersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize?: Long;

  /**
   * Page token. Set [page_token]
   * to the [ListFoldersResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken?: string;

  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Folder.name] field.
   * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
   */
  filter?: string;
}

export interface ListFoldersResponse {
  /**
   * List of Folder resources.
   */
  folders?: Folder[];

  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListFoldersRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListFoldersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken?: string;
}

export interface CreateFolderRequest {
  /**
   * ID of the cloud to create a folder in.
   * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
   */
  cloudId: string;

  /**
   * Name of the folder.
   * The name must be unique within the cloud.
   */
  name: string;

  /**
   * Description of the folder.
   */
  description?: string;

  /**
   * Resource labels as `` key:value `` pairs.
   */
  labels?: { [s: string]: string };
}

export interface CreateFolderMetadata {
  /**
   * ID of the folder that is being created.
   */
  folderId?: string;
}

export interface UpdateFolderRequest {
  /**
   * ID of the Folder resource to update.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;

  /**
   * Field mask that specifies which fields of the Folder resource are going to be updated.
   */
  updateMask?: protobuf.FieldMask;

  /**
   * Name of the folder.
   * The name must be unique within the cloud.
   */
  name: string;

  /**
   * Description of the folder.
   */
  description?: string;

  /**
   * Resource labels as `` key:value `` pairs.
   */
  labels?: { [s: string]: string };
}

export interface UpdateFolderMetadata {
  /**
   * ID of the Folder resource that is being updated.
   */
  folderId?: string;
}

export interface DeleteFolderRequest {
  /**
   * ID of the folder to delete.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
}

export interface DeleteFolderMetadata {
  /**
   * ID of the folder that is being deleted.
   */
  folderId?: string;
}

export interface ListFolderOperationsRequest {
  /**
   * ID of the Folder resource to list operations for.
   */
  folderId: string;

  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListFolderOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize?: Long;

  /**
   * Page token. Set [page_token]
   * to the [ListFolderOperationsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken?: string;
}

export interface ListFolderOperationsResponse {
  /**
   * List of operations for the specified folder.
   */
  operations?: operation.Operation[];

  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListFolderOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListFolderOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken?: string;
}
