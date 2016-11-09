import React from 'react';

import {connect} from 'react-redux';
import {modalToggle} from '../actions';

import Modal from '../containers/Modal';

let App = ({dispatch}) => {
    return (
        <div>
            <div className="examples">
                <h3>example</h3>
                <button type="button" className="button-primary" onClick={e => {dispatch(modalToggle('modal-foobar'))}}>try me</button>
                <Modal id="modal-foobar" title="react-modal example">
                    <div>
                        <p>Bacon ipsum dolor amet meatloaf porchetta pork loin hamburger tail, prosciutto kevin beef ribs doner sausage short ribs ground round alcatra ribeye fatback. Tail beef turkey tongue landjaeger pork loin pork chop kevin burgdoggen. Drumstick beef ribs filet mignon shankle landjaeger ham. Beef leberkas brisket doner, jowl pancetta turducken capicola fatback hamburger salami prosciutto chuck tri-tip beef ribs. Jowl short ribs cupim porchetta cow burgdoggen.</p>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

App = connect()(App);

export default App;
