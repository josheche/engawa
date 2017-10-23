'use strict';
const React = require('react');
const ReactHelmet = require('react-helmet');


const Helmet = ReactHelmet.Helmet;


class AboutPage extends React.Component {
    render() {

        return (
            <section className="section-about container">
                <Helmet>
                    <title>About us</title>
                </Helmet>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">About engawa</h1>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Sensor Monitoring</h4>
                                <p>
                                    Pork belly salvia tilde chia freegan four
                                    loko. Fingerstache microdosing succulents
                                    VHS venmo green juice wolf leggings hoodie
                                    shabby chic direct trade flannel.
                                </p>
                            </div>
                        </div>

                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Personalized Recommendations</h4>
                                <p>
                                    Seitan cloud bread messenger bag small
                                    batch. Green juice 90s banjo activated
                                    charcoal wolf. Subway tile scenester
                                    shoreditch, quinoa edison bulb kogi
                                    microdosing cliche DIY tumeric meh.
                                </p>
                            </div>
                        </div>

                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Nick Jackson</h4>
                                <p>
                                    Salvia man braid four dollar toast
                                    chicharrones, selvage hell of selfies.
                                    Try-hard crucifix cray freegan, viral
                                    fingerstache aesthetic. Cronut butcher
                                    irony brooklyn kitsch thundercats.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Garden</h1>
                        <p className="lead">
                            Monitor your home garden with engawa.
                        </p>
                        <img
                          className="img-responsive"
                          src="/public/media/engawa-prototype.jpg"
                        />
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = AboutPage;
