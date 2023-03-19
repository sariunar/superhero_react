import '../styles/superhero.css';
import button from '../images/boom.png'
import React from 'react';
class Superhero extends React.Component {
    render() {
        const { name, universe, alterego, occupation, friends, superpowers, url } = this.props;
        return (
            <div className='superhero-card'>
                <h2 className='superhero-name'> {name}</h2>
                <img class="superhero-btn" src={button} alt="btn" />
                <div className='superhero-universe'><span>Вселенная: </span>{universe}</div>
                <div className='superhero-alterego'><span>Альтер-эго: </span>{alterego}</div>
                <div className='superhero-occupation'><span>Род деятельности: </span>{occupation}</div>
                <div className='superhero-friends'><span>Друзья: </span>{friends}</div>
                <div className='superhero-superpowers'><span>Суперсилы: </span>{superpowers}</div>
                <img className='superhero-url' src={url}></img>
            </div>
        );
    }
}
export default Superhero;
//info