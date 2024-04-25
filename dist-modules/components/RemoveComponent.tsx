import React from 'react';
import { KEYS } from './constants';
import { Tag } from './SingleTag';
import CloseIcon from '../assets/close.svg';
import LockIcon from '../assets/protected_close.svg';

const crossStr = String.fromCharCode(9747);

export interface RemoveComponentProps {
  onRemove: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => void;
  readOnly: boolean;
  removeComponent?: React.ComponentType<any>;
  className?: string;
  tag: Tag;
  index: number;
  useIcon: boolean;
  isProtected: boolean;
}

const RemoveComponent = (props: RemoveComponentProps) => {
  const { readOnly, removeComponent, onRemove, className, tag, index, useIcon, isProtected} = props;

  var className2 = className;
  const onKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (KEYS.ENTER.includes(event.keyCode) || event.keyCode === KEYS.SPACE) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (event.keyCode === KEYS.BACKSPACE) {
      onRemove(event);
    }
  };

  if (readOnly) {
    return <span />;
  }

  if (useIcon) {
    className2 += '';
  }

  const ariaLabel = `Tag at index ${index} with value ${tag.id} focussed. Press backspace to remove`;
  if (removeComponent) {
    const Component = removeComponent;
    return (
      <Component
        onRemove={onRemove}
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
      onClick={onRemove}
      onKeyDown={onKeydown}
      className={className}
      type="button"
      aria-label={ariaLabel}>
      {/* {crossStr} */}
      {isProtected?<LockIcon/>:<CloseIcon/>}
    </button>
  );
};

export default RemoveComponent;
