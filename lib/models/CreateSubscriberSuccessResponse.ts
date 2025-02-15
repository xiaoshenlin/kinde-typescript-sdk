/* tslint:disable */
/* eslint-disable */
/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime.js';
import type { CreateSubscriberSuccessResponseSubscriber } from './CreateSubscriberSuccessResponseSubscriber.js';
import {
    CreateSubscriberSuccessResponseSubscriberFromJSON,
    CreateSubscriberSuccessResponseSubscriberFromJSONTyped,
    CreateSubscriberSuccessResponseSubscriberToJSON,
} from './CreateSubscriberSuccessResponseSubscriber.js';

/**
 * 
 * @export
 * @interface CreateSubscriberSuccessResponse
 */
export interface CreateSubscriberSuccessResponse {
    /**
     * 
     * @type {CreateSubscriberSuccessResponseSubscriber}
     * @memberof CreateSubscriberSuccessResponse
     */
    subscriber?: CreateSubscriberSuccessResponseSubscriber;
}

/**
 * Check if a given object implements the CreateSubscriberSuccessResponse interface.
 */
export function instanceOfCreateSubscriberSuccessResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateSubscriberSuccessResponseFromJSON(json: any): CreateSubscriberSuccessResponse {
    return CreateSubscriberSuccessResponseFromJSONTyped(json, false);
}

export function CreateSubscriberSuccessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubscriberSuccessResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriber': !exists(json, 'subscriber') ? undefined : CreateSubscriberSuccessResponseSubscriberFromJSON(json['subscriber']),
    };
}

export function CreateSubscriberSuccessResponseToJSON(value?: CreateSubscriberSuccessResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriber': CreateSubscriberSuccessResponseSubscriberToJSON(value.subscriber),
    };
}

