/* eslint-disable object-shorthand,no-trailing-spaces */
import { GetInventory, saveInventory } from '../services/Inventory';

export default {
  namespace: 'safeInventory',

  state: {
    changeInventory: 'no',
    submitting: false,
    status: false,
    // 库存量信息
    safeInvent: undefined,

  },

  effects: {
    *getInventory({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const response = yield call(GetInventory, payload);
      yield put({
        type: 'get',
        payload: response,
      });

      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
    *changeInventory({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      yield call(saveInventory, payload);
      yield put({
        type: 'changeStatus',
        payload: 'ok',
      })

      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
  },

  reducers: {
    changeStatus(state, { payload }) {
      return {
        ...state,
        changeInventory: payload,
      };
    },
    get(state, { payload }) {
      return {
        ...state,
        status: 'pass',
        safeInvent: payload,

      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        submitting: payload,
      };
    },
  },
};
