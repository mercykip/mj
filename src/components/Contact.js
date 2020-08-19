import React, { Component } from 'react';
import { Cell, Grid, List, ListItemContent, ListItem } from 'react-mdl';

class Contact extends Component {
    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <div>

                            <h2>Contact Me</h2>
                            <hr />

                            <List>
                                <ListItem>
                                    <ListItemContent >
                                        <i className="fa fa-phone-square" >(+254)-703319233</i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent >
                                        <i className="fa fa-phone-square" >(+254)-755991174</i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent >
                                        <i className="fa fa-envelope-square" aria-hidden="true">mercyjemosop@gmail.com</i>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div>
                            <h2>Social Media</h2>
                            <hr />
                            <div className="social-links-contact">
                                {/* <a href="https://www.facebook.com/mercy.jemosop.3"rel="noopener noreferrer"  target="_blank"><i className="fa fa-facebook-square"  aria-hidden="true"/></a> */}
                                <a href="https://twitter.com/kipyegon_mercy" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true" />Twitter</a>
                                <a href="https://github.com/mercykip" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" aria-hidden="true" />Github</a>
                                <a href="https://www.linkedin.com/in/mercy-jemosop-16a03916a/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" />Linked In</a>
                            </div>

                        </div>
                    </Cell>
                </Grid>

            </div >

        );
    }
}
export default Contact;