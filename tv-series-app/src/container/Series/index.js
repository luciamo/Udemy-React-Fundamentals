import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {

	state = {
		series: [],
		serieName: '',
		isFetching: false
	}

	onSeriesInputChange = e => {
		this.setState({ serieName: e.target.value });
		fetch('http://api.tvmaze.com/search/shows?q=' + e.target.value)
		.then((response) => response.json())
		.then(json => this.setState({series : json, isFetching: false}));
	}

	render() {
		const {series, serieName, isFetching} = this.state;
		return(
			<div>
				<input 
					value={this.serieName} 
					type="text" 
					onChange={this.onSeriesInputChange} />
				{
					!isFetching && series.length===0 && serieName.trim()==='' &&
					<p>Insira o nome de uma série *-* </p>
				}
				{
					!isFetching && series.length===0 && serieName.trim()!=='' &&
					<p>Desculpe! Nós não encontramos esta série nos nossos dados :(</p>
				}
				{
					isFetching && 
					<Loader />
				}
				{
					!isFetching &&
					<SeriesList list={this.state.series}/>
				}
			</div>
		)
	}
}

export default Series;