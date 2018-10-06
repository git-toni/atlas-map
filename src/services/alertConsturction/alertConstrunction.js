import { firebaseApp } from "../../environments/firebase/firebase";

class AlertConstructionService {
  constructor() {
    this.ref = firebaseApp.database().ref("alertConstruction/");
  }

  getData(callback) {
    this.ref.on("value", snapshot => {
      callback(snapshot.val());
    });
  }
}

export default AlertConstructionService;
