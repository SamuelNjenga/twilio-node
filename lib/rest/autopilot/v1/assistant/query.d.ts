/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the QueryList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The SID of the Assistant that is the parent of the resource
 */
declare function QueryList(version: V1, assistantSid: string): QueryListInstance;

/**
 * Options to pass to update
 *
 * @property sampleSid - The SID of an optional reference to the Sample created from the query
 * @property status - The new status of the resource
 */
interface QueryInstanceUpdateOptions {
  sampleSid?: string;
  status?: string;
}

interface QueryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): QueryContext;
  /**
   * create a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: QueryListInstanceCreateOptions, callback?: (error: Error | null, item: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * Streams QueryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams QueryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: QueryListInstanceEachOptions, callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a query
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): QueryContext;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: QueryListInstanceOptions, callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: QueryListInstancePageOptions, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property language - The ISO language-country string that specifies the language used for the new query
 * @property modelBuild - The SID or unique name of the Model Build to be queried
 * @property query - The end-user's natural language input
 * @property tasks - The list of tasks to limit the new query to
 */
interface QueryListInstanceCreateOptions {
  language: string;
  modelBuild?: string;
  query: string;
  tasks?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dialogueSid - The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
 * @property done - Function to be called upon completion of streaming
 * @property language - The ISO language-country string that specifies the language used by the Query resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property modelBuild - The SID or unique name of the Model Build to be queried
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property status - The status of the resources to read
 */
interface QueryListInstanceEachOptions {
  callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
  dialogueSid?: string;
  done?: Function;
  language?: string;
  limit?: number;
  modelBuild?: string;
  pageSize?: number;
  status?: string;
}

/**
 * Options to pass to list
 *
 * @property dialogueSid - The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
 * @property language - The ISO language-country string that specifies the language used by the Query resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property modelBuild - The SID or unique name of the Model Build to be queried
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property status - The status of the resources to read
 */
interface QueryListInstanceOptions {
  dialogueSid?: string;
  language?: string;
  limit?: number;
  modelBuild?: string;
  pageSize?: number;
  status?: string;
}

/**
 * Options to pass to page
 *
 * @property dialogueSid - The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
 * @property language - The ISO language-country string that specifies the language used by the Query resources to read
 * @property modelBuild - The SID or unique name of the Model Build to be queried
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - The status of the resources to read
 */
interface QueryListInstancePageOptions {
  dialogueSid?: string;
  language?: string;
  modelBuild?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: string;
}

interface QueryPayload extends QueryResource, Page.TwilioResponsePayload {
}

interface QueryResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  dialogue_sid: string;
  language: string;
  model_build_sid: string;
  query: string;
  results: object;
  sample_sid: string;
  sid: string;
  source_channel: string;
  status: string;
  url: string;
}

interface QuerySolution {
  assistantSid?: string;
}


declare class QueryContext {
  /**
   * Initialize the QueryContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The SID of the Assistant that is the parent of the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, assistantSid: string, sid: string);

  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: QueryInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueryInstanceUpdateOptions, callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
}


declare class QueryInstance extends SerializableClass {
  /**
   * Initialize the QueryContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The SID of the Assistant that is the parent of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: QueryPayload, assistantSid: string, sid: string);

  private _proxy: QueryContext;
  accountSid: string;
  assistantSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  dialogueSid: string;
  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
  language: string;
  modelBuildSid: string;
  query: string;
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: QueryInstance) => any): Promise<boolean>;
  results: any;
  sampleSid: string;
  sid: string;
  sourceChannel: string;
  status: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueryInstanceUpdateOptions, callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
  url: string;
}


declare class QueryPage extends Page<V1, QueryPayload, QueryResource, QueryInstance> {
  /**
   * Initialize the QueryPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: QuerySolution);

  /**
   * Build an instance of QueryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: QueryPayload): QueryInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { QueryContext, QueryInstance, QueryInstanceUpdateOptions, QueryList, QueryListInstance, QueryListInstanceCreateOptions, QueryListInstanceEachOptions, QueryListInstanceOptions, QueryListInstancePageOptions, QueryPage, QueryPayload, QueryResource, QuerySolution }
