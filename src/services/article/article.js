import { firebaseApp } from "../../environments/firebase";

class ArticleService {
  constructor() {
    this.ref = firebaseApp.database().ref("articles/");
  }

  getArticles(callback) {
    this.ref.on("value", snapshot => {
      callback(snapshot.val());
    });
  }

  createArticle(article = {}) {
    const ref = this.ref.push();

    ref.set({
      id: ref.key,
      title: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://lh3.googleusercontent.com/rxWH60baI--egv00WKL_Zps3MBZDPv9TPIeQbMe-d856RtdMuY3t_7ztjJRoZz9AtRE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec euismod ligula.",
      body: `
      <h1>Lorem</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec euismod ligula. Quisque scelerisque iaculis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam gravida, mauris eget hendrerit convallis, nibh ligula facilisis metus, sed posuere mi massa sit amet neque.
        Praesent magna lectus, sollicitudin sed tincidunt ac, iaculis et diam. Proin eu tempus metus.
        Suspendisse mattis est eu tempor commodo. Integer dapibus, lectus eu lacinia sodales, enim massa faucibus nulla, vitae euismod elit ipsum vitae leo. Maecenas vel quam aliquam, eleifend urna non, molestie purus. 
        Mauris sodales tempus quam. Integer in tristique nulla. 
        Aenean hendrerit auctor enim et lobortis. Maecenas gravida pretium dolor eget pellentesque. 
        Vivamus venenatis non enim at pretium. Aliquam erat volutpat.
      </p>
      `,
      author: "Lorem ipsum",
    });
  }
}

export default ArticleService;
