import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    const rankedLadder = localStorage.getItem('ranking') !== null ? JSON.parse(localStorage.getItem('ranking')) : { ranking: { name: '', score: '', picture: '' } };
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ol>
          {rankedLadder.map(
            (ranking, index) => (
              <li key={`${ranking.name}_${index}`}>
                <div>
                  <img src={ranking.picture} alt={`${ranking.name}`} />
                  <span data-testid={`player-name-${index}`}>{`${ranking.name} `} pontuou</span>
                  <span data-testid={`player-score-${index}`}>{`${ranking.score}`}</span>
                </div>
              </li>
            ),
          )}
        </ol>
        <section>
          <Link
            data-testid="btn-go-home"
            to="/"
          >
            INÍCIO
            </Link>
        </section>
      </div>
    );
  }
}

export default Ranking;
