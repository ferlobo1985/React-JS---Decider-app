import { useContext } from 'react'
import { MyContext } from '../context';

const Confirm = () => {
    const context = useContext(MyContext);

    return(
        <div>
            { context.state.question }
        </div>
    )

}

export default Confirm;