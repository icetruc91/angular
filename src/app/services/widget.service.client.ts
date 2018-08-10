export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());

  }
}


