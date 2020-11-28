import './App.css'
import React, { Component } from "react";
import { CardColumns} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SongCard from './SongCard';

export default class DisplayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    makeCard = item => {
        return (
            <SongCard song = {item} />
        )
    }

    render() {
        return (
            <div>
                <CardColumns>
                    {(this.props.list.length > 0) ? this.props.list.map(item => { return this.makeCard(item) }) : "No songs match these criteria"}
                </CardColumns>
            </div>
        )
    }
}