import './App.css'
import React, { Component } from "react";
import { CardColumns, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {ListItemIcon} from '@material-ui/core';

export default class DisplayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false,
            times_added: 0
        };

    }

    addSong = () => {
        this.setState({
            added: true,
            times_added: this.state.times_added + 1
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={this.props.song.source} alt={this.props.song.title} />
                    <Card.Body>
                        <Card.Title>{this.props.song.title}</Card.Title>
                        <Card.Text>
                            Artist: {this.props.song.artist}
                        </Card.Text>
                        <Card.Text>
                            Language: {this.props.song.language}
                        </Card.Text>
                        <Card.Text>
                            Singer: {this.props.song.singer}
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.addSong()}>
                            Add Song</Button>
                        <ListItemIcon>
                            {this.state.added ? (
                                <PlaylistAddCheckIcon />
                            ) : (
                                    <PlaylistAddIcon />
                                )}
                        </ListItemIcon>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Duration: {Math.floor(this.props.song.duration / 60)}:{this.props.song.duration % 60}</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}