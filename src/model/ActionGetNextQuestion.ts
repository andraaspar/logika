import { Action } from './Action'
import { ActionType } from './ActionType'

export interface ActionGetNextQuestionSchema {
}

export interface ActionGetNextQuestion extends Action, ActionGetNextQuestionSchema {
	readonly type: ActionType.GetNextQuestion
}

export function makeActionGetNextQuestion(o: ActionGetNextQuestionSchema): ActionGetNextQuestion {
	return {
		type: ActionType.GetNextQuestion, ...o}
}
