import { ActionType } from './ActionType'
import { Questions } from './Questions'
import { TAction } from './TAction'

export interface State {
	readonly questionNumber: number
	readonly questionIndex: number
	readonly questionIndicesShuffled: number[]
}

export function createState(): State {
	return {
		questionNumber: 0,
		questionIndex: -1,
		questionIndicesShuffled: [],
	}
}

export function rootReducer(state = createState(), action: TAction): State {
	switch (action.type) {
		case ActionType.GetNextQuestion:
			const questionIndicesShuffled = state.questionIndicesShuffled.slice()
			if (questionIndicesShuffled.length == 0) {
				const indices = Array.from(new Array(Questions.length), (_, i) => i)
				while (indices.length) {
					questionIndicesShuffled.push(indices.splice(Math.floor(Math.random() * indices.length), 1)[0])
				}
				if (questionIndicesShuffled[0] === state.questionIndex) {
					questionIndicesShuffled.push(questionIndicesShuffled.shift()!)
				}
			}
			const questionIndex = questionIndicesShuffled.shift()!
			return {
				...state,
				questionNumber: state.questionNumber + 1,
				questionIndicesShuffled,
				questionIndex,
			}
		default:
			return state
	}
}
