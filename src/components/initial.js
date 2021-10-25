import { useRef, useState, useContext } from 'react'
import { MyContext } from '../context';
import { toast } from 'react-toastify';

const Initial = () => {
    const context = useContext(MyContext);
    const textInput = useRef();
    const [showNext,setShowNext] = useState(false);
    //const [showError,setShowError] = useState(false);

    const handleChange = () => {
        if(textInput.current.value.length >= 5) setShowNext(true)
        else setShowNext(false);
    }

    const handleSubmit = () => {
        const value = textInput.current.value;

        if(value.length >= 30){
            //setShowError(true);
            toast.error("Too long bro!!",{
                position:toast.POSITION.TOP_LEFT
            })
            return false
        }

        context.goTo(1);
        context.question(value)
    }
 

    return(
        <div>
            <h1>Ask a question</h1>
            <input
                ref={textInput}
                onChange={handleChange}
                name="question"
                type="text"
                className="form-control"
            />

            { showNext &&
                <button
                    className="btn animate__animated animate__fadeIn"
                    onClick={handleSubmit}
                >
                    Next
                </button>
            }

            {/* { showError &&
                <div className="error">
                    The question is too long
                </div>       
            } */}

        
        </div>
    )

}

export default Initial;