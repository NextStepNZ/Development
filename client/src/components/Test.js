import React, { useState } from 'react';

function Test() {
	const questions = [
		{
			questionText: 'C is a: ',
			answerOptions: [
				{ answerText: 'General-purpose programming language', isCorrect: true },
				{ answerText: 'Photo editing program', isCorrect: false },
				{ answerText: 'Client-side scripting language', isCorrect: false },

			],
		},
		{
			questionText: 'Which of the following are valid data types in C??',
			answerOptions: [
				{ answerText: 'int, double, char, boolean', isCorrect: false },
				{ answerText: 'int, bool, string', isCorrect: false },
				{ answerText: 'int, float, double, char', isCorrect: true },
			],
		},
		{
			questionText: 'What does a leading 0x or 0X means??',
			answerOptions: [
				{ answerText: 'Decimal', isCorrect: false },
				{ answerText: 'Binary', isCorrect: true },
				{ answerText: 'Hexadecimal', isCorrect: true},

			],
		},
		{
			questionText: 'C does not have a boolean type.?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },

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
				</>
			)}
		</div>
	);
}
export default Test;