import React from 'react';

const SeasonListItem = ({ series }) => (
	<li >
		<Link to={`/series/${series.show.id}`}>
			{series.show.name}
		</Link>
	</li>
)
const SeriesList = (props) => {
	return (
		<div>
			<ul className="series-list">
				{props.list.map(series => (
					<SeasonListItem series={series} key={series.show.id}/>
				))}
			</ul>
		</div>
	)
}

export default SeriesList