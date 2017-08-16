import {connect} from 'react-redux';


let addtodo = () => {
    return <div>
        <form>
            <input />
            <button></button>
        </form>
    </div>;
}

addtodo = connect()(addtodo);

export default addtodo;