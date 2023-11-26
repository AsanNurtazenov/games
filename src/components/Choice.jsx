import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './img/Footer.css'
import math from './img/math.jpg'
import know_art from './know_art.webp'
import memory from'./memory.jpg'
import tags from'./Tags.jpg'
const Choice = function () {
    const [count, setCount] = useState(0)
    return (
        <section class="" >
            <form class='has-background-light container is-widescreen' style={{ 'height': '1500px', 'background-color': 'red', }}  >
                <div class="columns is-centered is-multiline " >
                    <div class="column is-3 mt-4" >
                        <div class="card" style={{ height: '550px' }} >
                            <figure class="image is-4by3">
                                <img src="https://trafaret-decor.ru/sites/default/files/2022-04/Таблица%20Шульте%2031.jpg" alt="Placeholder image" />
                            </figure>
                            <div class="card-content" >
                                <div class="media is-3" style={{ height: '350px' }} >
                                    <div class="media-content">
                                        <p class="title is-4 has-text-centered">Таблица шульте</p>
                                        <p class="subtitle is-6 has-text-centered ">Найди числа от 1 до 25 </p>
                                        <div class="content has-tex-centered" style={{'height':'105px'}}>
                                              Упражнения с таблицами позволяют улучшить периферическое зрительное восприятие,
                                            что важно, например, для скорочтения.

                                            <NavLink to="/gametable"><button class="button is-rounded is-warning is-medium is-fullwidth">Играть</button></NavLink >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-3 mt-4 ">
                        <div class="card is-3 " style={{
                            height: '550px'
                        }}>
                            <figure class="image is-4by4">
                                <img src="https://shareslide.ru/img/thumbs/eb018468096a9e607321e616d2f04a2e-800x.jpg" alt="Placeholder image" />
                            </figure>
                            <div class="card-content">
                                <div class="media is-3">
                                    <div class="media-content">
                                        <p class="title is-4 has-text-centered">Запомни число</p>
                                        <p class="subtitle is-6 has-text-centered">Запомни числа на экране и перепиши</p>
                                        <div class="content has-tex-centered" style={{'height':'105px'}}>
                                          Все, что вам нужно сделать,
                                            это запомнить числа, которые вы видите в каждом раунде, и повторить последовательность после того,
                                            как они исчезнут.
                                            
                                            <NavLink to='/numbers'><button class="button is-rounded is-warning is-medium is-fullwidth">Играть</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-3 mt-4 ">
                        <div class="card is-3"  style={{
                            height: '550px'
                        }}>
                            <div class="card-image">
                            <figure class="image is-4by3">
                                    <img src={memory} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content has-text-centered ">
                                <div class="media is-4">
                                    <div class="media-content has-text-centered">
                                        <p class="title is-4">Мемори </p>
                                        <p class="subtitle is-6 has-text-centered ">Найди одинаковые картинки </p>
                                        <div class="content has-tex-centered" style={{'height':'105px'}}>
                                            Эта игра развивает внимательность, память и скорость реакции.
                                            
                                            <NavLink to='/gamecard'><button class="button is-rounded is-warning is-medium is-fullwidth ">Играть</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns is-centered is-multiline">
                    <div class="column is-3 mt-4 ">
                        <div class="card" style={{
                            height: '550px'
                        }}>
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={tags} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content has-text-centered ">
                                <div class="media " >
                                    <div class="media-content ">
                                        <p class="title is-4 ">Пятнышки</p>
                                        <p class="subtitle is-6 has-text-centered">Воспроизведи последовательность картинок</p>
                                    </div>
                                </div>

                                <div class="content" style={{'height':'105px'}}>
                                    Эта игра развивает память, делает твое мышление более структурированным. 
                                </div>
                                 <NavLink to="/tags"><button class="button is-rounded is-warning is-medium is-fullwidth">Играть</button></NavLink >
                            </div>
                           
                        </div>
                    </div>
                    <div class="column is-3 mt-4 ">
                        <div class="card" style={{
                            height: '550px'
                        }}>
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={math} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <div class="media">
                                    <div class="media-content ">
                                        <p class="title is-4 ">Математика</p>
                                        <p class="subtitle is-6 has-text-centered"></p>
                                    </div>
                                </div>

                                <div class="content" style={{'height':'105px'}}>
                                   Найди сумму или произведение чисел 
                                </div>
                                 <NavLink to="/math"><button class="button is-rounded is-warning is-medium is-fullwidth">Играть</button></NavLink >
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
            </form>
        </section >
    )
}

export default Choice;