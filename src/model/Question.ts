import { ModelKind } from './ModelKind'

export interface QuestionSchema {
	text: string
	answer: string
}

export interface Question extends QuestionSchema {
	kind: ModelKind.Question
}

export function makeQuestion(o: QuestionSchema): Question {
	return {
		kind: ModelKind.Question, ...o}
}
