/*
Content Management

The content management feed allows you to process content for items in bulk. You can take in content via the content feeds. Use the XSDs to manage content.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FeedRecordResponseErrorsInner } from './feed-record-response-errors-inner';
import { FeedRecordResponseResultsInner } from './feed-record-response-results-inner';

/**
 * 
 * @export
 * @interface FeedRecordResponse
 */
export interface FeedRecordResponse {
    /**
     * 
     * @type {Array<FeedRecordResponseErrorsInner>}
     * @memberof FeedRecordResponse
     */
    'errors'?: Array<FeedRecordResponseErrorsInner>;
    /**
     * Total number of feeds returned
     * @type {number}
     * @memberof FeedRecordResponse
     */
    'totalResults'?: number;
    /**
     * The object response to the starting number, where 0 is the first available
     * @type {number}
     * @memberof FeedRecordResponse
     */
    'offset'?: number;
    /**
     * The number of items to be returned
     * @type {number}
     * @memberof FeedRecordResponse
     */
    'limit'?: number;
    /**
     * 
     * @type {Array<FeedRecordResponseResultsInner>}
     * @memberof FeedRecordResponse
     */
    'results'?: Array<FeedRecordResponseResultsInner>;
}

