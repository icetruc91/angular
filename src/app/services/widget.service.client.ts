export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('https://localhost:8080/api/topic/' + topicId + '/widget')
      .then(response => response.json());

  }
}


