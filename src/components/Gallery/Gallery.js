import React,{ Component } from 'react';
import axios from 'axios';
import Image from './Image'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            this.setState({
                gallery: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <section>
                {this.state.gallery.map((gallery)=> (
                    <Image key={gallery.id} gallery={gallery} />
                ))}
            </section>
        )
    }
}

export default Gallery;