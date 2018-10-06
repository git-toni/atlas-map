import { firebaseApp } from "../../environments/firebase/firebase";

class EventService {
  constructor() {
    this.ref = firebaseApp.database().ref("events/");
  }

  getEvents(callback) {
    this.ref.on("value", snapshot => {
      callback(snapshot.val());
    });
  }
}

export default EventService;
