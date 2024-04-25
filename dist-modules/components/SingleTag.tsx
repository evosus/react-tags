import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ClassNames from 'classnames';
import { canDrag, canDrop } from './utils';

import RemoveComponent from './RemoveComponent';
import NotesComponent from './NotesComponent';

const ItemTypes = { TAG: 'tag' };

export interface Tag {
  id: string;
  className: string;
  [key: string]: string;
}

interface TagProps {
  hasNotesField: string;
  isProtectedField: string;
  labelField: string;
  onDelete: (
    event:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>
  ) => void;
  tag: Tag;
  moveTag?: (dragIndex: number, hoverIndex: number) => void;
  removeComponent: React.ComponentType<any>;
  onTagClicked: (
    event: React.MouseEvent<HTMLSpanElement> | React.TouchEvent<HTMLSpanElement>
  ) => void;
  onNotesClicked: (
    event:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>
  ) => void;
  classNames: {
    tag: string;
    remove: string;
  };
  readOnly: boolean;
  index: number;
  allowDragDrop: boolean;
  // hasNotes: boolean;
  useRemoveIcon: boolean;
}

const SingleTag = (props: TagProps) => {
  const tagRef = useRef(null);
  const { readOnly, tag, classNames, index, moveTag, allowDragDrop } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TAG,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: props,
    canDrag: () => canDrag({ moveTag, readOnly, allowDragDrop }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TAG,
    drop: (item: TagProps) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      props?.moveTag?.(dragIndex, hoverIndex);
    },
    canDrop: (item) => canDrop(item),
  }));

  drag(drop(tagRef));

  const label = props.tag[props.labelField];
  const hasNotes = props.tag[props.hasNotesField] as unknown as boolean;
  const isProtected = props.tag[props.isProtectedField] as unknown as boolean;
  const { className = '' } = tag;
  /* istanbul ignore next */
  const opacity = isDragging ? 0 : 1;
  return (
    <span
      ref={tagRef}
      className={ClassNames('tag-wrapper', classNames.tag, className)}
      style={{
        opacity,
        cursor: canDrag({ moveTag, readOnly, allowDragDrop }) ? 'move' : 'auto',
      }}
      onClick={props.onTagClicked}
      onTouchStart={props.onTagClicked}>
      {hasNotes?<NotesComponent
        tag={props.tag}
        className={classNames.remove}
        notesComponent={props.removeComponent}
        onClick={props.onNotesClicked}
        readOnly={readOnly}
        index={index}
        useIcon={hasNotes}
      />:null}
      {label}
      <RemoveComponent
        tag={props.tag}
        className={classNames.remove}
        removeComponent={props.removeComponent}
        onRemove={props.onDelete}
        readOnly={readOnly}
        index={index}
        useIcon={props.useRemoveIcon}
        isProtected={isProtected}
      />
    </span>
  );
};

SingleTag.defaultProps = {
  labelField: 'text',
  readOnly: false,
  allowDragDrop: true,
  hasNotes: false
};
export { SingleTag };
