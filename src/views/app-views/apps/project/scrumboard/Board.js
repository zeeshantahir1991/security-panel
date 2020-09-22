import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import BoardCard from './BoardCard';

export class Board extends Component {

	render() {
		const { title, contents, index, isScrollable, isCombineEnabled, useClone, cardData, newCard } = this.props

		return (
			<Draggable draggableId={title} index={index}>
				{
					(provided, snapshot) => (
						<div className="board-column" ref={provided.innerRef} {...provided.draggableProps}>
							<div className="board-title" {...provided.dragHandleProps}>
								<h4 className="mb-0">{title}</h4>
							</div>
							<BoardCard
								listId={title}
								listType="CONTENT"
								className={snapshot.isDragging ? 'is-dragging' : ''}
								contents={contents}
								internalScroll={isScrollable}
								isCombineEnabled={isCombineEnabled}
								useClone={useClone}
								cardData={cardData}
							/>
							<div className="board-add" onClick={() => newCard(title)}>
								<div>Add task</div>
							</div>
						</div>
					)
				}
			</Draggable>
		)
	}
}

export default Board
