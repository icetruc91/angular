export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('https://curt-java-server-5.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());

  }
}


