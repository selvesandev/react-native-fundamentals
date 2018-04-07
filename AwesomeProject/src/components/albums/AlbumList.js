import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = {albums: []};

    constructor() {
        super();
        this.fetchData();
    }

    fetchData() {
        let $this = this;
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((response) => {
            this.setState({albums: response.data});
        });
    }

    renderAlbums() {
        return this.state.albums.map((album) => {
            return (<AlbumDetail key={album.title} album={album}/>)
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
