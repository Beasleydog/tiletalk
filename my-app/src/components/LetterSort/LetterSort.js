import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from "react";
import "./LetterSort.css";
import allWords from '../../wordLists/allWords';
function LetterSort({ scrambleWord, solution, onSolve }) {
    const [letters, setLetters] = useState(scrambleWord.split(""));

    useEffect(() => {
        setLetters(scrambleWord.split(""));
    }, [scrambleWord]);
    function check() {
        if (allWords.isWord(letters.join(""))) {
            onSolve();
        }
    }
    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const newLetters = reorder(
            letters,
            result.source.index,
            result.destination.index
        );

        setLetters(newLetters);
    }
    function reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };
    return (
        <div id="letterSortContainer">
            <DragDropContext onDragEnd={onDragEnd} >
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            id="letterContainer"
                            {...provided.droppableProps}
                        >
                            {letters.map((letter, index) => (
                                <Draggable key={index} draggableId={index.toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            style={provided.draggableProps.style}
                                            ref={provided.innerRef}
                                            className="letter"
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {letter}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick={check}>
                Check
            </button>
        </div>
    );
};
export default LetterSort;