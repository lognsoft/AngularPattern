import {EventEmitter} from "@angular/core";
export interface IApiRequest<T> {

  Router: string;
  URL: string;
  ListEmitter: EventEmitter<T>;
  ListData: Array<T>;
  SingleEmitter: EventEmitter<T>;
  SingleData?: T,
  HttpOptions: object;
  ListEmitterLoad():void;
  SingleEmitterLoad():void;
  GetSingleById(id:any):void;
  GetAll():void;
  Post(data:T):void;
  Put(id:any, data:T):void;
  Delete(id:any, data:T):void;
}
