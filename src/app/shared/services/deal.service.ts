import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../constant/url.constant';
import {IDeal} from '../model/deal.model';

type EntityResponseType = HttpResponse<IDeal>;
type EntityArrayResponseType = HttpResponse<IDeal[]>;

@Injectable({providedIn: 'root'})
export class DealService {

    private resourceUrl = SERVER_API_URL + 'api/deal';

    constructor(private http: HttpClient) {
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IDeal>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    query(req?: HttpParams): Observable<EntityArrayResponseType> {
        return this.http
            .get<IDeal[]>(this.resourceUrl, {params: req, observe: 'response'});
    }

    save(deal: IDeal): Observable<EntityResponseType> {
        return this.http.post<IDeal>(this.resourceUrl, deal, { observe: 'response' });
    }

    update(deal: IDeal): Observable<EntityResponseType> {
        return this.http.put<IDeal>(this.resourceUrl, deal, { observe: 'response' });
    }

    delete(id: number): Observable<EntityResponseType> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
