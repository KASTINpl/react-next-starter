import { ActionSelector, AppState } from '../AppStoreProvider/types'

export const getSessionId: ActionSelector<'session', 'id'> = store => store.session.id
export const getSessionStatus: ActionSelector<'session', 'status'> = (store: AppState) => store.session.status
