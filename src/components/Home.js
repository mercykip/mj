import React, { Component } from 'react';

import { Card, CardTitle, CardText, CardActions, Cell, Grid } from 'react-mdl';



class Home extends Component {

    render() {
        return (
            <div style={{ width: '100%' }} className="home">
                <Grid className="home-grid">
                    <Cell col={12}>
                        {/* <img
                            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                            alt="MercyJemosop"

                            className="mercyImage"
                            style={{ width: '200px', height: '200px', borderRadius: '35%' }}
                        /> */}

                        <div>
                            <Card className="about-card" shadow={0} style={{ width: '300px', height: '265px', borderRadius: '35%' }}>
                                <CardTitle

                                    expand style={{
                                        color: '#fff',
                                        backgroundImage: 'URL({process.env.PUBLIC_URL + "/images/profile.jpg"}) '
                                    }}></CardTitle>
                                <CardText style={{ textDecoration: "none", color: "#032129" }}>
                                    Hello,My name is Jemosop Mercy, a Front-end developer from Nairobi, Kenya. I'm passionate about
                                    programming and learning new skills in technology. I have 2 years experience as a web
                                    developer and am currently learning Flutter which is my new area of interest.
                                </CardText>
                                <CardActions border>
                                    <a class="button" colored href="/contact" style={{ textDecoration: "none", color: "Blue" }}>Contact</a>
                                    {/* <Button colored style={<a href="/contact" style={{textDecoration:"none",color:"white"}}>Contact</a>}></Button> */}
                                </CardActions>
                            </Card>
                        </div>
                        <div className="banner-text">
                            <h1>Front-End Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootsrap | JavaScript | React | Angular | Flutter</p>
                            <div className="social-links">
                                {/* <a href="https://www.facebook.com/mercy.jemosop.3"rel="noopener noreferrer"  target="_blank"><i className="fa fa-facebook-square"  aria-hidden="true"/></a> */}
                                <a href="https://twitter.com/kipyegon_mercy" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true" /></a>
                                <a href="https://github.com/mercykip" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" aria-hidden="true" /></a>
                                <a href="https://www.linkedin.com/in/mercy-jemosop-16a03916a/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                                <a href="https://mercyjemosop.medium.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-medium" aria-hidden="true" /></a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Home;