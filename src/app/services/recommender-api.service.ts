import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RetrieveResult, Song} from '../models/retrieveResult';
import {QueryMetrics} from "../models/retrieveModel";

@Injectable({
  providedIn: 'root'
})
export class RecommenderApiService {
  private baseUrl = 'https://e405-62-68-222-39.ngrok-free.app';
  private http = inject(HttpClient)

  checkHealth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/health`).pipe();
  }

  retrieveSongs(): Observable<Song[]> {
    console.log(this.baseUrl)
    return this.http.get<Song[]>(`${this.baseUrl}/songs`, {
      headers: ({
        "ngrok-skip-browser-warning": "69420"
      })});
  }

  getBaselineRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/baseline`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getTfIdfRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/tfidf`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getBertRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/bert`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getMFCCBOWRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/mfcc-bow`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getMFCCBOWCosRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/mfcc-bow-cos`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }


  getMFCCSTATRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/mfcc-stat`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getMFCCSTATCosRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/mfcc-stat-cos`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getResNetRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/resnet`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getVGG19Recommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/vgg19`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getLambdaMARTRecommendations(querySongId: string, N: number): Observable<RetrieveResult> {
    const url = `${this.baseUrl}/retrieve/lambda`;
    return this.http.post<RetrieveResult>(url, {
      query_song_id: querySongId,
      N: N
    });
  }

  getQueryMetrics(body: RetrieveResult): Observable<QueryMetrics> {
    return this.http.post<QueryMetrics>(`${this.baseUrl}/calculate_metrics`, body)
  }

}
