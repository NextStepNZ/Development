import React, { useState } from 'react';
import axios from 'axios'


function Test1() {
	const url = 'https://api.quotable.io/random';
	
	const getQuestions = () => {
		axios.get(url).then(res => {console.log(res)}).catch(err => console.log(err))
	}




	const questions = [
		{
			questionText: ' ',
			answerOptions: [
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },

			],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
			],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: true},

			],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },

			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<button onClick ={getQuestions}>Get Question</button>
				</>
			)}
		</div>
	);
}
export default Test1;