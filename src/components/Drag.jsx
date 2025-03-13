import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';

    export function Drag() {
        const [isDropped, setIsDropped] = useState(false);
        const draggableMarkup = (
        <Draggable>Drag me</Draggable>
        );
    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
          setIsDropped(true);
        }
      }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
    </DndContext>
  )
}