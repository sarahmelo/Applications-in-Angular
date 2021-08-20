import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { PhotoService } from "../photo/photo.service";

@Injectable()
export class PhotoListResolve implements Resolve{

  constructor(private photoService: PhotoService) {}
}
