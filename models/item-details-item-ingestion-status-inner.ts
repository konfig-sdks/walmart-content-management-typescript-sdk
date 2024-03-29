/*
Content Management

The content management feed allows you to process content for items in bulk. You can take in content via the content feeds. Use the XSDs to manage content.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ItemDetailsItemIngestionStatusInnerIngestionErrors } from './item-details-item-ingestion-status-inner-ingestion-errors';

/**
 * The ingestion status of an individual item
 * @export
 * @interface ItemDetailsItemIngestionStatusInner
 */
export interface ItemDetailsItemIngestionStatusInner {
    /**
     * Mart ID that a user or seller uses for a marketplace
     * @type {number}
     * @memberof ItemDetailsItemIngestionStatusInner
     */
    'martId'?: number;
    /**
     * An arbitrary alphanumeric unique ID, seller-specified, identifying each item.
     * @type {string}
     * @memberof ItemDetailsItemIngestionStatusInner
     */
    'sku'?: string;
    /**
     * An alphanumeric product ID, generated by Walmart
     * @type {string}
     * @memberof ItemDetailsItemIngestionStatusInner
     */
    'wpid'?: string;
    /**
     * index of items in the feed
     * @type {number}
     * @memberof ItemDetailsItemIngestionStatusInner
     */
    'index'?: number;
    /**
     * Can be one of the following: DATA_ERROR, SYSTEM_ERROR, TIMEOUT_ERROR, or INPROGRESS
     * @type {string}
     * @memberof ItemDetailsItemIngestionStatusInner
     */
    'ingestionStatus': ItemDetailsItemIngestionStatusInnerIngestionStatusEnum;
    /**
     * 
     * @type {ItemDetailsItemIngestionStatusInnerIngestionErrors}
     * @memberof ItemDetailsItemIngestionStatusInner
     */
    'ingestionErrors'?: ItemDetailsItemIngestionStatusInnerIngestionErrors;
}

type ItemDetailsItemIngestionStatusInnerIngestionStatusEnum = 'INPROGRESS' | 'SUCCESS' | 'DATA_ERROR' | 'SYSTEM_ERROR' | 'TIMEOUT_ERROR'


