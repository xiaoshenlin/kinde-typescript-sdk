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
/**
 * 
 * @export
 * @interface LogoutRedirectUrls
 */
export interface LogoutRedirectUrls {
    /**
     * An application's logout URLs.
     * @type {Array<string>}
     * @memberof LogoutRedirectUrls
     */
    redirectUrls?: Array<string>;
}

/**
 * Check if a given object implements the LogoutRedirectUrls interface.
 */
export function instanceOfLogoutRedirectUrls(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LogoutRedirectUrlsFromJSON(json: any): LogoutRedirectUrls {
    return LogoutRedirectUrlsFromJSONTyped(json, false);
}

export function LogoutRedirectUrlsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogoutRedirectUrls {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'redirectUrls': !exists(json, 'redirect_urls') ? undefined : json['redirect_urls'],
    };
}

export function LogoutRedirectUrlsToJSON(value?: LogoutRedirectUrls | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirect_urls': value.redirectUrls,
    };
}

