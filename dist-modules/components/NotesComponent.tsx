import React from 'react';
import { KEYS } from './constants';
import { Tag } from './SingleTag';
import StickyNote from '../assets/sticky_note.svg';

export interface NotesComponentProps {
  onClick: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => void;
  readOnly: boolean;
  notesComponent?: React.ComponentType<any>;
  className?: string;
  tag: Tag;
  index: number;
  useIcon: boolean;
}

const NotesComponent = (props: NotesComponentProps) => {
  const { readOnly, notesComponent, onClick, className, tag, index, useIcon } = props;

  const onKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (KEYS.ENTER.includes(event.keyCode) || event.keyCode === KEYS.SPACE) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (event.keyCode === KEYS.BACKSPACE) {
      onClick(event);
    }
  };

  if (readOnly) {
    return <span />;
  }

  const ariaLabel = `Tag at index ${index} with value ${tag.id} focussed. Press backspace to remove`;
  if (notesComponent) {
    const Component = notesComponent;
    return (
      <Component
        onClick={onClick}
        onKeyDown={onKeydown}
        className={className}
        aria-label={ariaLabel}
        tag={tag}
        index={index}
      />
    );
  }

  return (
    <button
      onClick={onClick}
      onKeyDown={onKeydown}
      className={className}
      type="button"
      aria-label={ariaLabel}>
      <StickyNote />
    </button>
  );
};

export default NotesComponent;
