import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterContentChecked,
  OnDestroy,
} from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import Dexie from 'dexie';
import { SharedService } from './shared/services/shared.service';
import { BaseComponent } from './shared/components/base/base.component';

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
})
export class AppComponent
  extends BaseComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  subs: Subscription[] = [];
  loaderBool: boolean = false;

  constructor(
    private http: HttpClient,
    private swUpdate: SwUpdate,
    private sharedService: SharedService,
    private cdr: ChangeDetectorRef
  ) {
    super();
    this.getUpdate();
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  getUpdate(): void {
    if (this.swUpdate.isEnabled) {
      const updatesAvailable = this.swUpdate.versionUpdates.pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map((evt) => ({
          type: 'UPDATE_AVAILABLE',
          current: evt.currentVersion,
          available: evt.latestVersion,
        }))
      );

      updatesAvailable.subscribe(() => {
        if (confirm('A New version of site is available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }

  ngOnInit(): void {
    this.watchLoader();
  }

  watchLoader(): void {
    this.sharedService.loaderShow.subscribe(
      (res: boolean) => (this.loaderBool = res)
    );
  }

  postData(): void {
    let data = {
      name: 'zohaib',
      age: 24,
      race: 'asian',
    };
    this.http.get('https://randomuser.me/api/').subscribe(
      (res: any) => {},
      (error) => {
        this.addApi({
          url: 'https://randomuser.me/api/',
          method: 'GET',
          payload: data,
        }).then(() => this.backgroundSync());
      }
    );
  }

  backgroundSync() {
    navigator.serviceWorker.ready
      .then((swReg: any) => swReg.sync.register('syncing'))
      .catch((error) => {});
  }

  async addApi(data: any) {
    let db = new Dexie('storeApi');
    db.version(1).stores({
      storeApi: '++id',
    });
    return await db.table('storeApi').add({
      url: data.url,
      method: data.method,
      payload: data.payload,
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
