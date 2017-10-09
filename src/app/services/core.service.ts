/**
 *
 * TODO used to define the server url
 * Created by langley on 12/9/17.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() { }
  public baseUrl: string = "http://localhost:8080";
}
