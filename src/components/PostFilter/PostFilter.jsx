import React from 'react'

const PostFilter = ({fil}) => {
	return (
		<div>
      <MyInput
        placeholder='Поиск...'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value) }
      />
      <MySelect 
        value={selectedSort}
        defaultValue='Сортировка'
        onChange={sortPost}
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'description', name: 'По описанию'}
        ]}
      />
		</div>
	)
}

export default PostFilter