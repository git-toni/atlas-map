import { firebaseApp } from "../../environments/firebase/firebase";

class DataService {
  constructor() {
    this.ref = firebaseApp.database().ref("data/");
  }

  getData(callback) {
    this.ref.on("value", snapshot => {
      callback(snapshot.val());
    });
  }
}

export default DataService;
