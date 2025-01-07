import {Component, computed, inject} from '@angular/core';
import {RecommenderService} from '../../services/recommender.service';
import {AccordionModule} from "primeng/accordion";
import {PanelModule} from "primeng/panel";
import {Button} from "primeng/button";
import {QueryMetricsComponent} from "../query-metrics/query-metrics.component";
import {ChipModule} from "primeng/chip";
import {TagModule} from "primeng/tag";
import {DataService} from "../../services/data.service";
import {MetricsService} from "../../services/metrics.service";
import {RetrievalResultModelComponent} from "../retrieval-result-model/retrieval-result-model.component";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-retrieval-results',
  imports: [
    AccordionModule,
    PanelModule,
    Button,
    QueryMetricsComponent,
    ChipModule,
    TagModule,
    RetrievalResultModelComponent,
    CardModule
  ],
  templateUrl: './retrieval-results.component.html',
  styleUrl: './retrieval-results.component.scss',
  standalone: true
})
export class RetrievalResultsComponent {
  recommenderService = inject(RecommenderService)
  dataService = inject(DataService)
  metricService = inject(MetricsService)

  isLoading = computed(() => {
    return this.dataService.isLoadingSongs() || this.recommenderService.isLoadingRecommendations()
  })

}
