import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IListResponse} from "../shared/models/general-response-model";
import {GET_CLOUD_VENDOR_LIST} from "../shared/cons/endpoint-cons";
import {CloudModels} from "../components/models/cloud-models";

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) {
  }

  getCloudVendorList(): Observable<IListResponse<CloudModels>> {
    return this.http.get<IListResponse<CloudModels>>(GET_CLOUD_VENDOR_LIST);
  }

  getCloudVendor(id: string): Observable<CloudModels> {
    return this.http.get<CloudModels>(`${GET_CLOUD_VENDOR_LIST}/${id}`)
  }

  createCloud(newCloudVendor: CloudModels): Observable<CloudModels> {
    return this.http.post<CloudModels>(GET_CLOUD_VENDOR_LIST, newCloudVendor, { responseType: 'text' as 'json' });
  }

  editCloud(cloudVendor: CloudModels): Observable<CloudModels> {
    return this.http.put<CloudModels>(GET_CLOUD_VENDOR_LIST , cloudVendor, { responseType: 'text' as 'json' });
  }

  deleteCloud(id: string): Observable<CloudModels>{
    return this.http.delete<CloudModels>(`${GET_CLOUD_VENDOR_LIST}${id}`,{ responseType: 'text' as 'json' })
  }
}
