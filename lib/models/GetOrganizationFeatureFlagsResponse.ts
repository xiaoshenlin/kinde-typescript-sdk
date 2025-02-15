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
import type { GetOrganizationFeatureFlagsResponseFeatureFlagsValue } from './GetOrganizationFeatureFlagsResponseFeatureFlagsValue.js';
import {
    GetOrganizationFeatureFlagsResponseFeatureFlagsValueFromJSON,
    GetOrganizationFeatureFlagsResponseFeatureFlagsValueFromJSONTyped,
    GetOrganizationFeatureFlagsResponseFeatureFlagsValueToJSON,
} from './GetOrganizationFeatureFlagsResponseFeatureFlagsValue.js';

/**
 * 
 * @export
 * @interface GetOrganizationFeatureFlagsResponse
 */
export interface GetOrganizationFeatureFlagsResponse {
    /**
     * Response code.
     * @type {string}
     * @memberof GetOrganizationFeatureFlagsResponse
     */
    code?: string;
    /**
     * Response message.
     * @type {string}
     * @memberof GetOrganizationFeatureFlagsResponse
     */
    message?: string;
    /**
     * The environment's feature flag settings.
     * @type {{ [key: string]: GetOrganizationFeatureFlagsResponseFeatureFlagsValue; }}
     * @memberof GetOrganizationFeatureFlagsResponse
     */
    featureFlags?: { [key: string]: GetOrganizationFeatureFlagsResponseFeatureFlagsValue; };
}

/**
 * Check if a given object implements the GetOrganizationFeatureFlagsResponse interface.
 */
export function instanceOfGetOrganizationFeatureFlagsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetOrganizationFeatureFlagsResponseFromJSON(json: any): GetOrganizationFeatureFlagsResponse {
    return GetOrganizationFeatureFlagsResponseFromJSONTyped(json, false);
}

export function GetOrganizationFeatureFlagsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrganizationFeatureFlagsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'featureFlags': !exists(json, 'feature_flags') ? undefined : (mapValues(json['feature_flags'], GetOrganizationFeatureFlagsResponseFeatureFlagsValueFromJSON)),
    };
}

export function GetOrganizationFeatureFlagsResponseToJSON(value?: GetOrganizationFeatureFlagsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'feature_flags': value.featureFlags === undefined ? undefined : (mapValues(value.featureFlags, GetOrganizationFeatureFlagsResponseFeatureFlagsValueToJSON)),
    };
}

