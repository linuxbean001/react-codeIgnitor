import React from "react";
import Header from "../components/signup/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StepOne from "../components/signup/StepOne";
import StepTwo from "../components/signup/StepTwo";
import StepThree from "../components/signup/StepThree";
import StepFour from "../components/signup/StepFour";
import { useStateValue } from "../util/context";
import { STEPS } from "../util/constants";

const SITE_LOGO = "images/nudge-site-logo.png";

export default function Signup() {
    const [state] = useStateValue();
    return (
        <div className="container">
            <Router>
                <Header />
                <div className="signup-body">
                    <div className="left-side">
                        <section className="animated fadeInUp">
                            <a className="navbar-brand block">
                                <img src={SITE_LOGO} />
                            </a>
                            <section className="m-b-lg" id="sign_up_wrap">
                                <header className="text-center m-b-md m-t-md">
                                    <h3>{STEPS[state.step - 1].title}</h3>
                                </header>
                                <div className="request-success text-center animated fadeInUp" style={{ display: "none" }}>
                                    Thank you for your demo request, we will contact you shortly.
                                </div>
                                <div className="alert alert-danger" style={{ display: "none" }}></div>
                                <form autoComplete="off" className="form-signup" action="signup_handle" method="post" data-parsley-validate>
                                    <Switch>
                                        <Route exact path="/" component={StepOne} />
                                        <Route exact path="/step1" component={StepOne} />
                                        <Route exact path="/step2" component={StepTwo} />
                                        <Route exact path="/step3" component={StepThree} />
                                        <Route exact path="/step4" component={StepFour} />
                                    </Switch>
                                    <div className="wrapper text-center">
                                        <small>
                                            or{" "}
                                            <a href="<?php echo $this->siteurl . '/login'; ?>" className="green">
                                                sign in
                                            </a>
                                        </small>
                                    </div>
                                </form>
                            </section>
                        </section>
                        <div className="text-center padder">
                            <p>
                                <small>Nudge Content Analytics © 2019</small>
                            </p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div style={{ width: "100%" }}>
                            <img src={STEPS[state.step - 1].image} style={{ width: "100%", maxHeight: 500 }} />
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}
