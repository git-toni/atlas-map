import { firebaseApp } from "../../environments/firebase/firebase";

class AlertService {
  constructor() {
    this.ref = firebaseApp.database().ref("alert/");
  }

  getData(callback) {
    this.ref.on("value", snapshot => {
      callback(snapshot.val());
    });
  }
}

export default AlertService;
