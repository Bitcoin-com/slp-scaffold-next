import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
let SLPSDK = require("slp-sdk");
let SLP = new SLPSDK();
(async () => {
  try {
    let list = await SLP.list();
    console.log(list);
  } catch (error) {
    console.error(error);
  }
})();

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="static/logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Hello SLP</h1>
        </header>
      </div>
    );
  }
}

export default Index;
