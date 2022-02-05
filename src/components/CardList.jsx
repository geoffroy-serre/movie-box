import React from 'react';
import Card from './Card';

function CardList({data, total}) {
	return (
		<React.Fragment>
			<div className="total-results">
				{total !== 0 && `Il y a ${total} resultat${total > 1 ? `s` : ''}`}
			</div>
			<div className="card-list">
				{data.map((item) => {
					return <Card key={item.id} data={item} />;
				})}
			</div>
		</React.Fragment>
	);
}

export default CardList;
