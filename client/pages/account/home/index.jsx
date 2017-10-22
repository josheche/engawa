'use strict';
const Moment = require('moment');
const React = require('react');

// const url = "http://192.168.69.125/data/temp";
//
// let getMatrixData = function (urld) {
//     fetch(urld)
//       .then((resp) => resp.text())// Call the fetch function passing the url of the API as a parameter
//       .then(function(dat) {
//           // Your code for handling the data you get from the API
//           console.log(dat);
//       })
//       .catch(function(err) {
//           // This is where you run code if the server returns any errors
//           console.log(err);
//   });
// }


class HomePage extends React.Component {
    constructor(props) {

        super(props);

        this.state = this.getThisMoment();

    }

    componentDidMount() {

        this.interval = setInterval(this.refreshTime.bind(this), 1000);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    refreshTime() {

        this.setState(this.getThisMoment());
    }

    getThisMoment() {

        const thisMoment = Moment();
        // thisMoment.format('ss')
        return {
            second: "haha",
            minute: thisMoment.format('mm'),
            hour: thisMoment.format('HH'),
            day: thisMoment.format('DD'),
            month: thisMoment.format('MM'),
            year: thisMoment.format('YYYY')
        };
    }

    render() {

        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1 className="page-header">My Garden Stats</h1>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.hour}
                                    </div>
                                    <div className="stat-label">hour</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.minute}
                                    </div>
                                    <div className="stat-label">minute</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.second}
                                    </div>
                                    <div className="stat-label">second</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.year}
                                    </div>
                                    <div className="stat-label">year</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.month}
                                    </div>
                                    <div className="stat-label">month</div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="well text-center">
                                    <div className="stat-value">
                                        {this.state.day}
                                    </div>
                                    <div className="stat-label">day</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 text-center">
                        <h1 className="page-header">Garden Cam</h1>
                        <img
                          className="img-responsive"
                          src="/public/media/japanese-garden.jpg"
                        />
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = HomePage;
