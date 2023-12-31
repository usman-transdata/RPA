import React from 'react';
import { TAnnotation, TOptions } from '../types';
type Props = {
    name: string;
    type: string | null;
    top: string;
    left: string;
    height: string;
    width: string;
    handleCancelEdit: () => void;
    handleSaveEdit: (annotation: TAnnotation, originalName: string) => void;
    removeAnnotation: (name: string) => void;
    handleCornerPointerDown: (e: React.PointerEvent<SVGElement>, corner: string) => void;
    handleCornerPointerUp: (e: React.PointerEvent<SVGElement>) => void;
    handleKeyPress: (e: React.KeyboardEvent, name: string) => void;
    handlePointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
    handlePointerMove: (event: React.PointerEvent) => void;
    handlePointerUp: () => void;
    annotationTypes: string[];
    options: TOptions;
};
declare function EditableAnnotation({ height, width, top, left, name, type, handleCancelEdit, handleCornerPointerDown, handleCornerPointerUp, handleKeyPress, handlePointerDown, handlePointerMove, handlePointerUp, handleSaveEdit, removeAnnotation, annotationTypes, options, }: Props): JSX.Element;
export default EditableAnnotation;
