import React, { ReactNode } from 'react';
import type { Tag } from './SingleTag';
import { KEYS, INPUT_FIELD_POSITIONS } from './constants';
/**
 * Props for the ReactTags component.
 */
interface ReactTagsProps {
    /**
     * Placeholder text for the input field.
     */
    placeholder: string;
    /**
     * Field name to use for the label of each tag.
     */
    labelField: string;
    /**
     * Array of suggestions to display in the dropdown.
     */
    hasNotesField: string;
    isProtectedField: string;
    suggestions: Array<Tag>;
    /**
     * Array of key codes that will trigger a tag addition.
     */
    delimiters: Array<number>;
    /**
     * Whether the input field should automatically focus on mount.
     */
    autofocus: boolean;
    /**
     * Whether the input field should automatically focus on mount.
     */
    autoFocus: boolean;
    /**
     * Whether the input field should be read-only.
     */
    readOnly: boolean;
    /**
     * Whether the input field should be displayed inline.
     * TODO: Remove in v7.x.x
     */
    inline: boolean;
    /**
     * Position of the input field relative to the tags.
     */
    inputFieldPosition: keyof typeof INPUT_FIELD_POSITIONS;
    /**
     * Handler for tag deletion.
     */
    handleDelete: (i: number, event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
    handleNotesClick: (i: number, event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
    /**
     * Handler for tag addition.
     */
    handleAddition: (tag: {
        id: string;
    }) => void;
    /**
     * Handler for tag updates.
     */
    onTagUpdate: (i: number, tag: {
        id: string;
    }) => void;
    /**
     * Handler for tag drag and drop.
     */
    handleDrag: (tag: {
        id: string;
    }, currPos: number, newPos: number) => void;
    /**
     * Handler for filtering suggestions.
     */
    handleFilterSuggestions: (query: string, suggestions: Array<Tag>) => Array<Tag>;
    /**
     * Handler for tag click events.
     */
    handleTagClick?: (i: number, e: React.MouseEvent<HTMLSpanElement> | React.TouchEvent<HTMLSpanElement>) => void;
    /**
     * Whether to allow deletion from an empty input field.
     */
    allowDeleteFromEmptyInput: boolean;
    /**
     * Whether to allow addition from pasted text.
     */
    allowAdditionFromPaste: boolean;
    /**
     * Whether to allow drag and drop of tags.
     */
    allowDragDrop: boolean;
    /**
     * Handler for input field changes.
     */
    handleInputChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Handler for input field focus events.
     */
    handleInputFocus: (value: string, e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handler for input field blur events.
     */
    handleInputBlur: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Minimum length of the query to trigger suggestions.
     */
    minQueryLength: number;
    /**
     * Function to determine whether to render suggestions.
     */
    shouldRenderSuggestions: (query: string) => boolean;
    /**
     * Component to be rendered for removing tags.
     */
    removeComponent: React.ComponentType<any>;
    /**
     * Whether to enable autocomplete when typing for suggestions
     */
    autocomplete: boolean | number;
    /**
     * CSS class names for the component.
     */
    classNames: {
        root: string;
        rootFocused: string;
        selected: string;
        selectedTag: string;
        selectedTagName: string;
        search: string;
        searchInput: string;
        suggestions: string;
        suggestionActive: string;
        suggestionDisabled: string;
    };
    /**
     * Name attribute for the input field.
     */
    name: string;
    /**
     * ID attribute for the input field.
     */
    id: string;
    /**
     * Maximum length of the input field.
     */
    maxLength: number;
    /**
     * Value of the input field.
     */
    inputValue: string;
    /**
     * Maximum number of tags that can be added.
     */
    maxTags: number;
    /**
     * Array of tags to display.
     */
    tags: Array<Tag>;
    /**
     * Whether to allow unique tags only.
     */
    allowUnique: boolean;
    /**
     * Render function to render each suggestion item.
     */
    renderSuggestion: (item: Tag, query: string) => ReactNode;
    /**
     * Additional props to pass to the input field.
     */
    inputProps: {
        [key: string]: string;
    };
    /**
     * Whether the tags are editable.
     */
    editable: boolean;
    /**
     * Whether to display a button to clear all the tags.
     */
    clearAll: boolean;
    /**
     * Handler for clearing all the tags.
     */
    onClearAll: () => void;
    hasNotes: boolean;
    useRemoveIcon: boolean;
}
declare const ReactTags: {
    (props: ReactTagsProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        placeholder: string;
        labelField: string;
        hasNotesField: string;
        suggestions: never[];
        delimiters: number[];
        autofocus: boolean;
        autoFocus: boolean;
        inline: boolean;
        inputFieldPosition: string;
        handleDelete: (...args: any[]) => void;
        handleAddition: (...args: any[]) => void;
        allowDeleteFromEmptyInput: boolean;
        allowAdditionFromPaste: boolean;
        autocomplete: boolean;
        readOnly: boolean;
        allowUnique: boolean;
        allowDragDrop: boolean;
        tags: never[];
        inputProps: {};
        onTagUpdate: (...args: any[]) => void;
        editable: boolean;
        clearAll: boolean;
        handleClearAll: (...args: any[]) => void;
    };
};
declare const WithContext: ({ ...props }: ReactTagsProps) => import("react/jsx-runtime").JSX.Element;
export { WithContext };
export { ReactTags as WithOutContext };
export { KEYS };
