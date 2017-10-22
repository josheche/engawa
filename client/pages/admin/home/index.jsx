'use strict';
const React = require('react');
const Moment = require('moment');
const plantmodels = require('/Users/willieavendano/dev/01/engawa/client/helpers/model.js')
// const visa = require('/Users/willieavendano/dev/01/engawa/client/helpers/visa.js')
const visaData = require('/Users/willieavendano/dev/01/engawa/visa-data/stores.json');

//var obj = plantmodels.plantRequest();
//console.log(obj);
var proxyUrl = 'http://0.0.0.0:8080/',
    targetUrl = 'http://192.168.69.125:8080/data/';
var fullUrl = proxyUrl + targetUrl;
var getMatrixData = (sensor, url) => {
  fetch(url + sensor)
      .then(result=> {
          result.text();
      });

};





class HomePage extends React.Component {
    constructor(props) {

        super(props);

        this.state = this.getThisMoment();
        this.down = {temp: "", uv: "", press: "", humid: ""};
        this.visaData = visaData;
        this.temp = getMatrixData("temp", fullUrl);
        this.uv = getMatrixData("uv", fullUrl);
        this.press = getMatrixData("press", fullUrl);
        this.humid = getMatrixData("humid", fullUrl);
        this.plants = {names: []};
        this.plants.names = plantmodels.plantFunctions.allNames(null);
        console.log(this.plants.names);
        // this.plants.images = this.plans.names.map((name) => plantmodels.getImage(name))
        // /Users/willieavendano/dev/01/engawa/public/media/plants/ageratum.jpg

    }

    componentDidMount() {
        // this.press = getMatrixData("press", fullUrl);
        this.interval = setInterval(this.refreshTime.bind(this), 2000);
        // this.press = getMatrixData("press", fullUrl);

        // this.down.temp = getMatrixData("temp", fullUrl);

        // getMatrixData("uv", fullUrl);
        // getMatrixData("press", fullUrl);
        // getMatrixData("humid", fullUrl);
        // var src = "data:image/jpeg;base64,";
        // console.log(this.plants.names);

        // function getImageData(initialData) {
        //   //gets the data
        //   return new Promise(function (resolve, reject) {
        //     resolve(getMatrixData("image", initialData))
        //   })
        // }
        //
        // function createImageTag(dataFromGetImageData) {
        //   //gets the data
        //   return new Promise(function (resolve, reject) {
        //     src += dataFromGetImageData;
        //     var newImage = document.createElement('img');
        //     newImage.src = src;
        //     newImage.width = newImage.height = "300";
        //     // document.querySelector('#live').innerHTML = newImage.outerHTML;
        //     resolve(document.querySelector('#live').innerHTML = newImage.outerHTML)
        //   })
        // }
        //
        // function runner(initialData) {
        //   return getImageData(initialData)
        //       .then(createImageTag)
        // }
        //
        // runner(fullUrl).then(function (dataFromValidateFunction) {
        //     console.log(dataFromValidateFunction);
        // })
        // // var item_image = getMatrixData("image", fullUrl);



        // console.log(plantmodels);


    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    refreshTime() {
        // this.press = getMatrixData("press", fullUrl);
        this.setState(this.getThisMoment());
        this.forceUpdate();
        // console.log(this.press)
    }

    getThisMoment() {

        const thisMoment = Moment();

        return {
            second: "101852.75",
            minute: "41.12%",
            hour: "7.87 C",
            day: thisMoment.format('DD'),
            month: thisMoment.format('MM'),
            year: "0.0026 UV"
        };
    }

    render() {

        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">Guardian Stats</h1>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.hour}
                                    </div>
                                    <div className="stat-label">Degrees Celsius</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.minute}
                                    </div>
                                    <div className="stat-label">Humidity</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.second}
                                    </div>
                                    <div className="stat-label">Milibar Pressure</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.year}
                                    </div>
                                    <div className="stat-label">Ultra Violet</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.month}
                                    </div>
                                    <div className="stat-label">Days Till Harvest</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.day}
                                    </div>
                                    <div className="stat-label">Guardians Enabled </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 text-center">
                        <h1 className="page-header">Live Feed</h1>
                        <img
                          id="live"
                          className="img-responsive"
                          src="/public/media/japanese-garden.jpg"
                        />
                    </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                      <h1 className="page-header">Current Plants </h1>
                      <div className="row">
                          <div className="col-sm-4">
                              <div className="well text-center">
                                  <div className="stat-value">
                                      <img class="img-responsive" width="150px" src="/public/media/plants/lavender.jpg"></img>
                                  </div>
                                  <div className="stat-label">{this.plants.names[4]}</div>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="well text-center">
                                  <div className="stat-value">
                                      <img class="img-responsive" width="150px" src="/public/media/plants/sunflower.jpg"></img>

                                  </div>
                                  <div className="stat-label">{this.plants.names[5]}</div>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="well text-center">
                                  <div className="stat-value">
                                      <img class="img-responsive" width="150px" src="/public/media/plants/oregano.jpg"></img>
                                  </div>
                                  <div className="stat-label">{this.plants.names[7]}</div>
                              </div>
                          </div>
                        </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                      <h1 className="page-header">Stores To Keep your Garden Fresh</h1>
                      <div className="row">
                          <div className="col-sm-4">
                              <div className="well text-center">
                                  <div className="stat-value">
                                      {this.visaData[0].responseValues.visaStoreName}
                                  </div>
                                  <div className="stat-label">{this.visaData[0].responseValues.merchantStreetAddress}</div>
                                  <div className="stat-label">{this.visaData[0].responseValues.merchantCategoryCodeDesc}</div>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="well text-center">
                                  <div className="stat-value">
                                      {this.visaData[1].responseValues.visaStoreName}
                                  </div>
                                  <div className="stat-label">{this.visaData[0].responseValues.merchantStreetAddress}</div>
                                  <div className="stat-label">{this.visaData[1].responseValues.merchantCategoryCodeDesc}</div>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="well text-center">
                                  <div className="stat-value">
                                      {this.visaData[2].responseValues.visaStoreName}
                                  </div>
                                  <div className="stat-label">{this.visaData[0].responseValues.merchantStreetAddress}</div>
                                  <div className="stat-label">{this.visaData[2].responseValues.merchantCategoryCodeDesc}</div>
                              </div>
                          </div>
                        </div>
                  </div>
                </div>

            </section>
        );
    }
}


module.exports = HomePage;
