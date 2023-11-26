import { useState, useEffect } from "react";
import pathIconCar from './img/car.jpg';
import pathIconCake from './img/nature.jpg';
import pathIconTeapot from './img/mountain.jpeg';
import pathIconDog from './img/dog.jpg';
import pathIconCat from './img/cat.jpeg';
import pathIconZamok from './img/zamok.jpeg';
import pathIconQuestion from './img/question.jpg';
import './img/GameCard.css'
const initialArrayCards = [
    { id: 1, img: pathIconCar },
    { id: 2, img: pathIconCake },
    { id: 3, img: pathIconTeapot },
    { id: 4, img: pathIconDog },
    { id: 5, img: pathIconCat },
    { id: 6, img: pathIconZamok }

]
const GameCard = () => {
    const [arrayCards, setArrayCards] = useState([])
    const [openedCards, setOpenedCards] = useState([])
    const [matched, setMatched] = useState([])
    const [moves, setMoves] = useState(0)

    const pairOfArrayCards = [...initialArrayCards, ...initialArrayCards]

    const shuffle = (array) => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }
    useEffect(() => {
        setArrayCards(shuffle(pairOfArrayCards))
    }, [])
    const flipCard = (index) => () => {
        setOpenedCards(opened => [...opened, index])
        setMoves(prevMove => prevMove + 1)
    }
    useEffect(() => {
        if (openedCards < 2) return
        const firstMatched = arrayCards[openedCards[0]];
        const secondMatched = arrayCards[openedCards[1]]

        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched, firstMatched.id])
        }
        if (openedCards.length === 2) setTimeout(() => setOpenedCards([]), 1000)
    }, [openedCards])
    const handleGameRestart = () => {
        setOpenedCards([]);
        setMatched([])
        setMoves(0)
        setArrayCards(shuffle(pairOfArrayCards))
    }

    return (
        <section class="has-background-light container is-widescreen has-text-centered">
            <div class="container1" style={{ 'height': '1000px' }}>
                <div class="title has-text-centered">Мемори</div>
                <p class="number-of-strokes has-text-centered">Сделан ходов: {moves}</p>
                <div class="cardsa has-text-centered container" style={{

                    display: "grid",
                    justifyContent:'center',
                    gridTemplateColumns: "repeat(4, 100px)",
                    gridTemplateRows: "repeat(4, 100px)",
                     'margin-left': 'auto',
                    'margin-right': 'auto',
                }}>
                    {arrayCards.map((item, index) => {
                        let isFlipped = false;

                        if (openedCards.includes(index)) isFlipped = true
                        if (matched.includes(item.id)) isFlipped = true

                        return (
                            <div class="has-text-centered container is-max-width" style={{}}>
                                <div key={index}
                                    class={`carda ${isFlipped ? 'flipped' : ''} `}
                                    onClick={flipCard(index)}>
                                    <div className="inner">
                                        <div className="front">
                                            <img src={item.img} width='100' alt="front-card" height='100' />
                                        </div>
                                        <div className="back">
                                            <img src={pathIconQuestion} alt="question mark" width='100' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div class="has-text-centered"><button class="button-restart " onClick={handleGameRestart} >Начать заново</button></div>

            </div>
        </section>

    );
}

export default GameCard;