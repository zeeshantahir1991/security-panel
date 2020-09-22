import React, { Component } from 'react'
import Board from './Board';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { PlusOutlined } from '@ant-design/icons';
import { Avatar  } from 'antd';
import reorder, { reorderQuoteMap } from './reoreder'
import { scrumboardData, memberIds } from './ScrumboardData';
import ModalForm from './ModalForm';
import { modalModeTypes, createCardObject, createCommentObject, AssigneeAvatar } from './utils';
import { Scrollbars } from 'react-custom-scrollbars';

export class Scrumboard extends Component {

	static defaultProps = {
    isCombineEnabled: false,
  };
  
  constructor(props) {
		super(props);
    this.onAddCardModal = this.onAddCardModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.onUpdateCardModal = this.onUpdateCardModal.bind(this);
    this.onAttachmentChange = this.onAttachmentChange.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
	} 

  state = {
    columns: scrumboardData,
    ordered: Object.keys(scrumboardData),
    modal: false,
    modalMode: '',
    currentListId: '',
    cardData: null
	};
	
	onDragEnd = (result) => {
    if (result.combine) {
      if (result.type === 'COLUMN') {
        const shallow = [...this.state.ordered];
        shallow.splice(result.source.index, 1);
        this.setState({ ordered: shallow });
        return;
      }

      const column = this.state.columns[result.source.droppableId];
      const withQuoteRemoved = [...column];
      withQuoteRemoved.splice(result.source.index, 1);
      const columns = {
        ...this.state.columns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      this.setState({ columns });
      return;
    }

    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (result.type === 'COLUMN') {
      const ordered = reorder(
        this.state.ordered,
        source.index,
        destination.index,
      );

      this.setState({
        ordered,
      });

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    });

    this.setState({
      columns: data.quoteMap,
    });
  }

  onUpdateCardModal(obj, listId) {
    this.setState({
      modal: true,
      modalMode: modalModeTypes(1),
      currentListId: listId,
      cardData: obj
    })
  }

  onAddCardModal(listId) {
    this.setState({
      modal: true,
      modalMode: modalModeTypes(0),
      currentListId: listId
    })
  }

  onAddBoardModal = () => {
    this.setState({
      modal: true,
      modalMode: modalModeTypes(2)
    })
  }

  onModalSubmit = ( values, mode ) => {
    const currentListId = this.state.currentListId;
    const data = this.state.columns
    if(mode === modalModeTypes(0)) {    
      const newCard = createCardObject()
      newCard.name = values.cardTitle ? values.cardTitle : 'Untitled Card'
      data[currentListId].push(newCard)
      const reoredering = reorderQuoteMap(this.updateOrdering(data, currentListId));
      this.setState({
        columns: reoredering.quoteMap,
        ordered: Object.keys(data),
        modal: false,
        currentListId: ''
      })
    }

    if(mode === modalModeTypes(1)) {
      const updatadedCard = data[currentListId].map(elm => {
        if(values.id === elm.id) {
          elm = values
        }
        return elm
      })
      data[currentListId] = updatadedCard
      this.setState({
        columns: data,
        ordered: Object.keys(data),
        modal: false,
      })
    }

    if(mode === modalModeTypes(2)) {
      data[values.boardTitle? values.boardTitle : 'Untitled Board'] = [];
      this.setState({
        columns: data,
        ordered: Object.keys(data),
        modal: false,
      })
    }
  };

  onAttachmentChange(attachments, cover, cardId, listId) {
    const data = this.state.columns
    const updatadedCards = data[listId].map(elm => {
      if(elm.id === cardId) {
        elm.attachments = attachments;
        elm.cover = cover
      }
      return elm
    })
    data[listId] = updatadedCards
    this.setState({
      columns: data,
      ordered: Object.keys(data),
    })
  }

  onCommentChange(cardId, message) {
    const { currentListId, columns } = this.state
    const data = columns;
    const newComment = createCommentObject()
    newComment.message = message;
    const updatedComment = data[currentListId].map(elm => {
      if(elm.id === cardId) {
        elm.comments = [...elm.comments, ...[newComment]];
      }
      return elm
    })
    data[currentListId] = updatedComment
    this.setState({
      columns: data,
      ordered: Object.keys(data),
    })
  }

  updateOrdering(data, currentListId){
    return {
      quoteMap: data,
      source: {droppableId: currentListId, index: data[currentListId].length - 1},
      destination: {droppableId: currentListId, index: data[currentListId].length - 1},
    }
  }


  onCloseModal(modal) {
    this.setState({
      modal: modal
    })
  }

	render() {
		const columns = this.state.columns;
    const ordered = this.state.ordered;
		const { containerHeight, useClone, isCombineEnabled, withScrollableColumns } = this.props;
		    
		const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={containerHeight}
        isCombineEnabled={isCombineEnabled}
      >
        {(provided) => (
          <div className="scrumboard" ref={provided.innerRef} {...provided.droppableProps}>
						<div className="scrumboard-header">
              <div>
                <h3>Backlog</h3>
              </div>
              <div className="text-right">
                <div className="d-flex align-items-center">
                  {memberIds.map((member, i) => i < 4 ? <AssigneeAvatar key={member} id={member} size={30} chain/> : null)}
                  <Avatar className="ml-n2" size={30}>
                    <span className="text-gray font-weight-semibold font-size-base">+9</span>
                  </Avatar>
                </div>
              </div>
						</div>
						<Scrollbars className="scrumboard-body">
							{ordered.map((key, index) => (
								<Board
									key={key}
									index={index}
									title={key}
									contents={columns[key]}
									isScrollable={withScrollableColumns}
									isCombineEnabled={isCombineEnabled}
									useClone={useClone}
                  cardData={this.onUpdateCardModal}
                  newCard={this.onAddCardModal}
								/>
							))}
							{provided.placeholder}
              <div className="board-column add">
                <div className="board-title" onClick={() => this.onAddBoardModal()}>
                  <h4 className="mb-0">
                    <PlusOutlined />
                    <span>Add List</span>
                  </h4>
                </div>
              </div>
						</Scrollbars>
          </div>
        )}
      </Droppable>
    );

		return (
      <>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {containerHeight ? (
            <div className="scrumboard">{board}</div>
          ) : (
            board
          )}
        </DragDropContext>
        <ModalForm 
          visible={this.state.modal} 
          onClose={this.onCloseModal} 
          onModalSubmit={this.onModalSubmit}
          modalMode={this.state.modalMode}
          cardData={this.state.cardData}
          listId={this.state.currentListId}
          attachmentsChange={this.onAttachmentChange}
          commentsChange={this.onCommentChange}
        />
      </>
		)
	}
}

export default Scrumboard
