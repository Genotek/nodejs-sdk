// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';

import * as protobuf from '../../contrib/google/protobuf';
import * as rpc from '../../contrib/google/rpc';

/**
 * An Operation resource. For more information, see [Operation](/docs/api-design-guide/concepts/operation).
 */
export interface Operation {
  /**
   * ID of the operation.
   */
  id?: string;

  /**
   * Description of the operation. 0-256 characters long.
   */
  description?: string;

  /**
   * Creation timestamp.
   */
  createdAt?: protobuf.Timestamp;

  /**
   * ID of the user or service account who initiated the operation.
   */
  createdBy?: string;

  /**
   * The time when the Operation resource was last modified.
   */
  modifiedAt?: protobuf.Timestamp;

  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is available.
   */
  done?: boolean;

  /**
   * Service-specific metadata associated with the operation.
   * It typically contains the ID of the target resource that the operation is performed on.
   * Any method that returns a long-running operation should document the metadata type, if any.
   */
  metadata?: protobuf.Any;

  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error?: rpc.Status;

  /**
   * The normal response of the operation in case of success.
   * If the original method returns no data on success, such as Delete,
   * the response is [google.protobuf.Empty].
   * If the original method is the standard Create/Update,
   * the response should be the target resource of the operation.
   * Any method that returns a long-running operation should document the response type, if any.
   */
  response?: protobuf.Any;
}

/**
 * A set of methods for managing operations for asynchronous API requests.
 */
export class OperationService {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  /**
   * Returns the specified Operation resource.
   */
  get(request: GetOperationRequest): Promise<Operation>;

  /**
   * Cancels the specified operation.
   */
  cancel(request: CancelOperationRequest): Promise<Operation>;
}

export interface GetOperationRequest {
  /**
   * ID of the Operation resource to return.
   */
  operationId: string;
}

export interface CancelOperationRequest {
  /**
   * ID of the operation to cancel.
   */
  operationId: string;
}
