'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var CompletedPage;
var CompletedList;
var CompletedInstance;
var CompletedContext;

/**
 * Initialize the CompletedPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns CompletedPage
 */
function CompletedPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(CompletedPage.prototype, Page.prototype);
CompletedPage.prototype.constructor = CompletedPage;

/**
 * Build an instance of CompletedInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns CompletedInstance
 */
CompletedPage.prototype.getInstance = function getInstance(payload) {
  return new CompletedInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the CompletedList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns CompletedList
 */
function CompletedList(version) {
  function CompletedListInstance(sid) {
    return CompletedListInstance.get(sid);
  }

  CompletedListInstance._version = version;
  // Path Solution
  CompletedListInstance._solution = {};
  CompletedListInstance._uri = _.template(
    '/Conversations/Completed' // jshint ignore:line
  )(CompletedListInstance._solution);
  /**
   * Streams CompletedInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} opts.callback - A callback function to process records
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   */
  CompletedListInstance.each = function each(opts) {
    opts = opts || {};
    if (!(opts && 'callback' in opts)) {
      throw new Error('opts.callback parameter required');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, opts.callback);

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          deferred.resolve();
        } else {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(deferred.reject);
    }

    fetchNextPage(_.bind(this.page, this, opts));

    return deferred.promise;
  };

  /**
   * Lists CompletedInstance records from the API as a list.
   *
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  CompletedListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var deferred = Q.defer();
    var promise = this.each(opts);
    promise = promise.then(function() {
      deferred.resolve(allResources);
    });

    promise.catch(function(error) {
      deferred.reject(error);
    })

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * Retrieve a single page of CompletedInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CompletedInstance
   */
  CompletedListInstance.page = function page(opts, callback) {
    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new CompletedPage(
        this._version,
        payload
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return CompletedListInstance;
}


/**
 * Initialize the CompletedContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {CompletedContext}
 */
function CompletedInstance(version, payload) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    duration: deserialize.integer(payload.duration), // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    startTime: deserialize.iso8601DateTime(payload.start_time), // jshint ignore:line,
    endTime: deserialize.iso8601DateTime(payload.end_time), // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
}

_.extend(CompletedInstance.prototype, InstanceResource.prototype);
CompletedInstance.prototype.constructor = CompletedInstance;

Object.defineProperty(CompletedInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

module.exports = {
  CompletedPage: CompletedPage,
  CompletedList: CompletedList,
  CompletedInstance: CompletedInstance,
  CompletedContext: CompletedContext
};