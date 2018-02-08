import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/home-page/matches/card/card.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { WelcomeSectionComponent } from './main/home-page/welcome-section/welcome-section.component';
import { WinnersSectionComponent } from './main/home-page/winners-section/winners-section.component';
import { DriverImageComponent } from './main/home-page/winners-section/driver-image/driver-image.component';
import { NewsComponent } from './main/news/news.component';
import { MatchesComponent } from './main/home-page/matches/matches.component';
import { StatsComponent } from './main/stats/stats.component';
import { NewsCardComponent } from './main/news/news-card/news-card.component';
import { AboutComponent } from './main/home-page/about/about.component';
import { VideosComponent } from './main/multimedia-page/videos/videos.component';
import { MerchandiseComponent } from './main/merchandise/merchandise.component';
import { LoginComponent } from './header/login/login.component';
import { LeaderboardSectionComponent } from './main/home-page/leaderboard-section/leaderboard-section.component';
import { EventsPageComponent } from './main/events-page/events-page.component';
import { EventsCardComponent } from './main/events-page/events-card/events-card.component';
import { ReactiveFormsModule } from '@angular/forms'
import { DriverStatsComponent } from './main/stats/driver-stats/driver-stats.component';
import { CircuitsPageComponent } from './main/circuits-page/circuits-page.component';
import { CircuitDetailsComponent } from './main/circuits-page/circuit-details/circuit-details.component';
import { TeamsPageComponent } from './main/teams-page/teams-page.component';
import { TeamDetailsComponent } from './main/teams-page/team-details/team-details.component';
import { MultimediaPageComponent } from './main/multimedia-page/multimedia-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { DriverCardComponent } from './main/stats/driver-stats/driver-card/driver-card.component';
import { DcardComponent } from './main/stats/driver-stats/driver-card/dcard/dcard.component';
import { ImagesComponent } from './main/multimedia-page/images/images.component';
import { ChartModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './header/signup/signup.component';
import { ProductCardComponent } from './main/merchandise/product-card/product-card.component';
import { AuthService } from "./services/auth.service";
import { AdalService } from "ng2-adal/dist/core";
import { SecretService } from "./services/secret.service";
import { LoggedInGuard } from "./services/logged-in.guard";
import { UserDetailService } from "./services/user-detail.service";
import { UserProfileComponent } from './main/user-profile/user-profile.component';
import { MyprofileComponent } from './main/user-profile/myprofile/myprofile.component';
import { MyordersComponent } from './main/user-profile/myorders/myorders.component';
import { MybookingsComponent } from './main/user-profile/mybookings/mybookings.component';
import { MyrewardsComponent } from './main/user-profile/myrewards/myrewards.component';
import { StadiumCollaboratorComponent } from './main/user-profile/stadium-collaborator/stadium-collaborator.component';
import { EventDetailsComponent } from './main/events-page/events-card/event-details/event-details.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { CeiboShare } from 'ng2-social-share'; /* for social sharing */
import { ForgetPasswordComponent } from './header/login/forget-password/forget-password.component';
import { AdminComponent } from './main/user-profile/admin/admin.component';
import { AdminMultimediaComponent } from './main/user-profile/admin/admin-multimedia/admin-multimedia.component';
import { UploadImageComponent } from './main/user-profile/admin/admin-multimedia/upload-image/upload-image.component';
import { UploadVedioComponent } from './main/user-profile/admin/admin-multimedia/upload-vedio/upload-vedio.component';
import { SeasonsPageComponent } from './main/seasons-page/seasons-page.component';
import { SeasonDeatilsComponent } from './main/seasons-page/season-deatils/season-deatils.component';
import { F1HistoryPageComponent } from './main/f1-history-page/f1-history-page.component';
import { F1ClubHistoryPageComponent } from './main/f1-club-history-page/f1-club-history-page.component';
import { DeleteVideosComponent } from './main/user-profile/admin/admin-multimedia/delete-videos/delete-videos.component';
import { DeleteImagesComponent } from './main/user-profile/admin/admin-multimedia/delete-images/delete-images.component';
import { TestStadiumComponent } from './main/test-stadium/test-stadium.component';
import { AdminMerchandiseComponent } from './main/user-profile/admin/admin-merchandise/admin-merchandise.component';
import { AddProductComponent } from './main/user-profile/admin/admin-merchandise/add-product/add-product.component';
import { DeleteProductComponent } from './main/user-profile/admin/admin-merchandise/delete-product/delete-product.component';
import { AdminNewsComponent } from './main/user-profile/admin/admin-news/admin-news.component';
import { AddNewsComponent } from './main/user-profile/admin/admin-news/add-news/add-news.component';
import { DeleteNewsComponent } from './main/user-profile/admin/admin-news/delete-news/delete-news.component';
import { InfoComponent } from './main/home-page/info/info.component';
import { ProjectTeamComponent } from './main/home-page/project-team/project-team.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'news', component: NewsComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'merchandise', component: MerchandiseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'upcoming-events', component: EventsPageComponent },
  { path: 'circuits', component: CircuitsPageComponent },
  { path: 'circuits/:circuitId', component: CircuitDetailsComponent },
  { path: 'teams', component: TeamsPageComponent },
  { path: 'teams/:teamId', component: TeamDetailsComponent },
  { path: 'multimedia', component: MultimediaPageComponent },
  { path: 'Drivers', component: DriverStatsComponent },
  { path: 'multimedia/images/:multimediaId', component: ImagesComponent },
  { path: 'multimedia/videos/:multimediaId', component: VideosComponent },
  { path: 'news/details/:newsId', component: NewsCardComponent },
  { path: 'Drivers/driver_detail/:driver', component: DcardComponent },
  { path: 'user-profile', component: UserProfileComponent, children: [{ path: 'mybookings', component: MybookingsComponent }, { path: 'myorders', component: MyordersComponent }, { path: 'myprofile', component: MyprofileComponent }, { path: 'myrewards', component: MyrewardsComponent }, { path: 'stadiumcollaborator/:eventId', component: StadiumCollaboratorComponent }, { path: 'testStadium/:eventId/:stadiumName', component: TestStadiumComponent }, { path: 'multimedia-upload', component: AdminMultimediaComponent }, { path: 'Admin-Merchandise-Section', component: AdminMerchandiseComponent }, { path: 'Admin-News-Section', component: AdminNewsComponent }] },
  { path: 'upcoming-events/event/:eventId', component: EventDetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'seasons-history', component: SeasonsPageComponent },
  { path: 'seasons-history/season-details/:season', component: SeasonDeatilsComponent },
  { path: 'f1-history', component: F1HistoryPageComponent },
  { path: 'f1-club-history', component: F1ClubHistoryPageComponent },
  { path: 'stadium', component: TestStadiumComponent },
  { path: '**', redirectTo: 'not-found' },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CardComponent,
    HomePageComponent,
    WelcomeSectionComponent,
    WinnersSectionComponent,
    DriverImageComponent,
    NewsComponent,
    MatchesComponent,
    StatsComponent,
    NewsCardComponent,
    AboutComponent,
    VideosComponent,
    MerchandiseComponent,
    LoginComponent,
    LeaderboardSectionComponent,
    EventsPageComponent,
    EventsCardComponent,
    DriverStatsComponent,
    CircuitsPageComponent,
    CircuitDetailsComponent,
    TeamsPageComponent,
    TeamDetailsComponent,
    MultimediaPageComponent,
    DriverCardComponent,
    DcardComponent,
    SignupComponent,
    ImagesComponent,
    ProductCardComponent,
    UserProfileComponent,
    MyprofileComponent,
    MyordersComponent,
    MybookingsComponent,
    MyrewardsComponent,
    StadiumCollaboratorComponent,
    EventDetailsComponent,
    NotFoundComponent,
    CeiboShare, /* for social sharing */
    ForgetPasswordComponent,
    AdminComponent,
    AdminMultimediaComponent,
    UploadImageComponent,
    UploadVedioComponent,
    SeasonsPageComponent,
    SeasonDeatilsComponent,
    F1HistoryPageComponent,
    F1ClubHistoryPageComponent,
    DeleteVideosComponent,
    DeleteImagesComponent,
    TestStadiumComponent,
    AdminMerchandiseComponent,
    AddProductComponent,
    DeleteProductComponent,
    AdminNewsComponent,
    AddNewsComponent,
    DeleteNewsComponent,
    InfoComponent,
    ProjectTeamComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AccordionModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ChartModule,
    HttpModule, NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlJAYGuv_PhJCZExqAOezog6vFdwuZ0Ds'
    }),
    ReactiveFormsModule, BrowserAnimationsModule,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AdalService, SecretService, LoggedInGuard, AuthService, UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
