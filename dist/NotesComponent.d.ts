import React from 'react';
import { Tag } from './SingleTag';
export interface NotesComponentProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
    readOnly: boolean;
    notesComponent?: React.ComponentType<any>;
    className?: string;
    tag: Tag;
    index: number;
    useIcon: boolean;
}
declare const NotesComponent: (props: NotesComponentProps) => import("react/jsx-runtime").JSX.Element;
export default NotesComponent;
