import React from 'react';
export interface Tag {
    id: string;
    className: string;
    [key: string]: string;
}
interface TagProps {
    hasNotesField: string;
    isProtectedField: string;
    labelField: string;
    onDelete: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
    tag: Tag;
    moveTag?: (dragIndex: number, hoverIndex: number) => void;
    removeComponent: React.ComponentType<any>;
    onTagClicked: (event: React.MouseEvent<HTMLSpanElement> | React.TouchEvent<HTMLSpanElement>) => void;
    onNotesClicked: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
    classNames: {
        tag: string;
        remove: string;
    };
    readOnly: boolean;
    index: number;
    allowDragDrop: boolean;
    useRemoveIcon: boolean;
}
declare const SingleTag: {
    (props: TagProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        labelField: string;
        readOnly: boolean;
        allowDragDrop: boolean;
        hasNotes: boolean;
    };
};
export { SingleTag };
