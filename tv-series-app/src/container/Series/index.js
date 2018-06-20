import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {

	state = {
		series: []
	}

	componentDidMount() {
		fetch('http://api.tvmaze.com/search/shows?q=Vikings')
		.then((response) => response.json())
		.then(json => this.setState({series : json}))
	}

	onSeriesInputChange = e => {
		console.log(e)
		console.log(e.target.value)
	}

	render() {
		return(
			<div>The length of series array - {this.state.series.length}
				<input type="text" onChange={this.onSeriesInputChange} />
				<SeriesList list={this.state.series}/>
			</div>
		)
	}
}

export default Series;