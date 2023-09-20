import {environment} from "../../../environments/environment";
import {Environment} from "@angular/cli/lib/config/workspace-schema";

//Backend endpoints

export const GET_CLOUD_VENDOR_LIST = `${environment.API_HOST}cloudvendor/`;
export const GET_CLOUD_VENDOR_BY_ID = `${environment.API_HOST}cloudvendor/`;
export const UPDATE_CLOUD_VENDOR = `${environment.API_HOST}cloudvendor/`;
export const DELETE_CLOUD_VENDOR = `${environment.API_HOST}cloudvendor/`;
