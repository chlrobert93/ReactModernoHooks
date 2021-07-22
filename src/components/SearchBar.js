import React, { useState} from 'react';

const SearchBar = ({onFormSubmit})  =>{
    const [term, setTerm] = useState('');

    /*
     const  onInpiutChange =  event => {
        //this.setState({term: event.target.value});
        setTerm(event.target.value);
    };
    */   
 
     const onSubmit = (event) => {
         event.preventDefault();
 
         //Devolución de llamada de componente principal
         //llamarcon state para informar cual es el temino de búsqueda
          onFormSubmit(term);
          //this.props.onFormSubmit(this.state.term);
    };

    return (
        
        <div className="colorPage search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;