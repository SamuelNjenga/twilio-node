/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type SyncListItemQueryFromBoundType = 'inclusive'|'exclusive';

type SyncListItemQueryResultOrder = 'asc'|'desc';

/**
 * @description Initialize the SyncListItemList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique SID identifier of the Service Instance that hosts this List object.
 * @param listSid - The unique 34-character SID identifier of the List containing this Item.
 */
declare function SyncListItemList(version: V1, serviceSid: string, listSid: string): SyncListItemListInstance;

/**
 * Options to pass to update
 *
 * @property collectionTtl - Time-to-live of this item's parent List in seconds, defaults to no expiration.
 * @property data - Contains arbitrary user-defined, schema-less data that this List Item stores, represented by a JSON object, up to 16KB.
 * @property itemTtl - Time-to-live of this item in seconds, defaults to no expiration.
 * @property ttl - Alias for item_ttl
 */
interface SyncListItemInstanceUpdateOptions {
  collectionTtl?: number;
  data?: string;
  itemTtl?: number;
  ttl?: number;
}

interface SyncListItemListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncListItemContext;
  /**
   * create a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SyncListItemListInstanceCreateOptions, callback?: (error: Error | null, item: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  /**
   * Streams SyncListItemInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SyncListItemListInstanceEachOptions, callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_list_item
   *
   * @param index - The index
   */
  get(index: string): SyncListItemContext;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncListItemListInstanceOptions, callback?: (error: Error | null, items: SyncListItemInstance[]) => any): Promise<SyncListItemInstance[]>;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncListItemListInstancePageOptions, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
}

/**
 * Options to pass to create
 *
 * @property collectionTtl - Time-to-live of this item's parent List in seconds, defaults to no expiration.
 * @property data - Contains arbitrary user-defined, schema-less data that this List Item stores, represented by a JSON object, up to 16KB.
 * @property itemTtl - Time-to-live of this item in seconds, defaults to no expiration.
 * @property ttl - Alias for item_ttl
 */
interface SyncListItemListInstanceCreateOptions {
  collectionTtl?: number;
  data: string;
  itemTtl?: number;
  ttl?: number;
}

/**
 * Options to pass to each
 *
 * @property bounds - The bounds
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property from - An integer representing Item index offset.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - A string; asc or desc
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SyncListItemListInstanceEachOptions {
  bounds?: SyncListItemQueryFromBoundType;
  callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void;
  done?: Function;
  from?: string;
  limit?: number;
  order?: SyncListItemQueryResultOrder;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property bounds - The bounds
 * @property from - An integer representing Item index offset.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - A string; asc or desc
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SyncListItemListInstanceOptions {
  bounds?: SyncListItemQueryFromBoundType;
  from?: string;
  limit?: number;
  order?: SyncListItemQueryResultOrder;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property bounds - The bounds
 * @property from - An integer representing Item index offset.
 * @property order - A string; asc or desc
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SyncListItemListInstancePageOptions {
  bounds?: SyncListItemQueryFromBoundType;
  from?: string;
  order?: SyncListItemQueryResultOrder;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncListItemPayload extends SyncListItemResource, Page.TwilioResponsePayload {
}

interface SyncListItemResource {
  account_sid: string;
  created_by: string;
  data: string;
  date_created: Date;
  date_expires: Date;
  date_updated: Date;
  index: number;
  list_sid: string;
  revision: string;
  service_sid: string;
  url: string;
}

interface SyncListItemSolution {
  listSid?: string;
  serviceSid?: string;
}


declare class SyncListItemContext {
  /**
   * Initialize the SyncListItemContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param listSid - The list_sid
   * @param index - The index
   */
  constructor(version: V1, serviceSid: string, listSid: string, index: number);

  /**
   * fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  /**
   * remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListItemInstance) => any): void;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncListItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
}


declare class SyncListItemInstance extends SerializableClass {
  /**
   * Initialize the SyncListItemContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property index - Contains the numeric index of this List Item.
   * @property accountSid - The unique SID identifier of the Twilio Account.
   * @property serviceSid - The unique SID identifier of the Service Instance that hosts this List object.
   * @property listSid - The unique 34-character SID identifier of the List containing this Item.
   * @property url - The absolute URL for this item.
   * @property revision - Contains the current revision of this item, represented by a string identifier.
   * @property data - Contains arbitrary user-defined, schema-less data that this List Item stores, represented by a JSON object, up to 16KB.
   * @property dateExpires - Contains the date this item expires and gets deleted automatically.
   * @property dateCreated - The date this item was created, given in UTC ISO 8601 format.
   * @property dateUpdated - Specifies the date this item was last updated, given in UTC ISO 8601 format.
   * @property createdBy - The identity of this item's creator.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique SID identifier of the Service Instance that hosts this List object.
   * @param listSid - The unique 34-character SID identifier of the List containing this Item.
   * @param index - The index
   */
  constructor(version: V1, payload: SyncListItemPayload, serviceSid: string, listSid: string, index: number);

  private _proxy: SyncListItemContext;
  accountSid: string;
  createdBy: string;
  data: string;
  dateCreated: Date;
  dateExpires: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListItemInstance) => any): void;
  index: number;
  listSid: string;
  /**
   * remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListItemInstance) => any): void;
  revision: string;
  serviceSid: string;
  /**
   * Produce a plain JSON object version of the SyncListItemInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncListItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListItemInstance) => any): void;
  url: string;
}


declare class SyncListItemPage extends Page<V1, SyncListItemPayload, SyncListItemResource, SyncListItemInstance> {
  /**
   * Initialize the SyncListItemPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncListItemSolution);

  /**
   * Build an instance of SyncListItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListItemPayload): SyncListItemInstance;
}

export { SyncListItemContext, SyncListItemInstance, SyncListItemList, SyncListItemListInstance, SyncListItemListInstanceCreateOptions, SyncListItemListInstanceEachOptions, SyncListItemListInstanceOptions, SyncListItemListInstancePageOptions, SyncListItemPage, SyncListItemPayload, SyncListItemResource, SyncListItemSolution }