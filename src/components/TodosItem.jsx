import React, {useState} from 'react';
import checkImg from '../static/check.svg'
import crossImg from '../static/cross.svg'

const TodosItem = (props) => {
    const [isCheckedValue, setIsCheckedValue] = useState(props.completed || false)

    return (
        <div className='todos-item'>
            <div className='left-bar'>
                <p>{props.title}</p>
            </div>
            <div>
                <button
                    onClick={() => setIsCheckedValue(!isCheckedValue)}
                >
                    <img src={checkImg} alt='check' />
                </button>
                <button
                    className='btn-del'
                    onClick={props.removeTodo}
                >
                    <img src={crossImg} alt='check' />
                </button>
            </div>
            {isCheckedValue &&
                <div className='line'></div>
            }
        </div>
    );
};

export default TodosItem;