import Immutable from 'immutable'
import { ROW_DATA_BY_ID, ROW_DATA_IDS } from '../constants/global'

export const normalizeResponse = ({ rowData }) =>
    rowData.reduce((acc, row) => acc.merge({
        [ROW_DATA_BY_ID]: acc.get(ROW_DATA_BY_ID).set(row.id, row),
        [ROW_DATA_IDS]: acc.get(ROW_DATA_IDS).add(row.id)
    }), Immutable.Map({
        [ROW_DATA_BY_ID]: Immutable.Map(),
        [ROW_DATA_IDS]: Immutable.OrderedSet()
    }))
