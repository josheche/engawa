'use strict';
const React = require('react');
const ReactHelmet = require('react-helmet');
const ReactRouter = require('react-router-dom');


const Helmet = ReactHelmet.Helmet;
const Link = ReactRouter.Link;


class HomePage extends React.Component {
    render() {

        return (
            <section className="section-home container">
                <Helmet>
                    <title>engawa</title>
                    <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet" />
                </Helmet>
                <div className="jumbotron">
                    <h1>engawa</h1>
                    <p className="lead lead-spacing">Your home garden monitor.</p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">🏡 What is Engawa?</h3>
                            </div>
                            <div className="panel-body">
                                <p>
                                    In Japanese, "engawa" is the veranda that serves as a link between
                                    the outdoor garden and traditional Japanese dwelling,
                                    typically with sliding panels to protect it from the
                                    elements or open it completely to the outdoors.
                                </p>
                                <Link to="/about" className="btn btn-info btn-block">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">⛩️ Gate to your Garden</h3>
                            </div>
                            <div className="panel-body">
                                <p>
                                    An IoT based, digital gate to your garden.
                                    The "Guardian" sits in your garden and keeps
                                    tabs on everything that happens. Using special
                                    technology to gauge and measure every part of your garden.
                                </p>
                                <Link to="/signup" className="btn btn-success btn-block">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">🌱 Monitor Progress</h3>
                            </div>
                            <div className="panel-body">
                                <p>
                                    The "Guardian" monitors progress of an array of
                                    metrics necessary to ensure the growth of everything
                                    in your garden. Users have a dashboard with all their
                                    garden's stats. Have any questions? Contact us below.
                                </p>
                                <Link to="/contact" className="btn btn-warning btn-block">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = HomePage;
