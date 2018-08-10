import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WidgetServiceClient} from "../services/widget.service.client";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  constructor(private widgetService: WidgetServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  topicId;
  widgets = [];

  setParams(params) {
    this.topicId = params['topicId'];
    this.loadWidgets(this.topicId);

  }

  loadWidgets(topicId) {
    console.log(topicId);
    this.widgetService.findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }

}
