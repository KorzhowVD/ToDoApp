import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({totalPages, page, changePage}) => {
	const pageArray = getPagesArray(totalPages)
	return (
		<div className="wrapperPage">
			{pageArray.map(p => 
				<button 
					onClick={() => changePage(p)}
					key={p} 
					className={page === p ? 'pageNumber pageNumber__current' : 'pageNumber'}
				>
					{p}
				</button>)}
		</div>  
	)
}

export default Pagination