/**
 * Created by YZ on 2017/11/20.
 */
import * as financingService from '../services/financing';

export default {
  namespace: 'receiveFinancing',
  state: {
    companyId: null,
    companyName: null,
    net: null,
    mortgage: null,
    receiveCompanies: null,
    stockNet: null,
  },
  reducers: {
    saveReceive(state, { payload: { companyId, others: {companyName, net, mortgage } } }) {
      return {
        ...state,
        companyId: companyId,
        companyName: companyName,
        net: net,
        mortgage: mortgage,
      };
    },
    saveMortgage(state, {payload: mortgage}){
      return {
        ...state,
        mortgage,
      };
    },
    fillNet(state, {payload: net}){
      return {
        ...state,
        net,
      };
    },
    fillReceiveCompanies(state, {payload: receiveCompanies}) {
      return {
        ...state,
        receiveCompanies,
      };
    },
    /**
     * 动产质押融资的库存净额
     * @param state
     * @param stockNet
     * @returns {{stockNet: *}}
     */
    fillStockNet(state, {payload: stockNet}){
      return {
        ...state,
        stockNet,
      };
    },
  },
  effects: {
    *applyForReceive({payload: { companyId, others: {companyName, net, mortgage } }}, {call, put}){
      yield call(financingService.applyForFinancing, payload);
      yield put({
        type: 'saveReceive',
        companyId: companyId,
        companyName: companyName,
        net: net,
        mortgage: mortgage,
      });
    },
    *fetchNet({payload}, {call, put}) {
      yield put({
        type: 'fillNet',
        payload: null,
      });
      const data = yield call(financingService.getNet, payload);
      yield put({
        type: 'fillNet',
        payload: data,
      });
    },
    *fetchStockNet({payload}, {call, put}) {
      yield put({
        type: 'fillStockNet',
        payload: null,
      });
      const data = yield call(financingService.getStockNet, payload);
      yield put({
        type: 'fillStockNet',
        payload: data,
      });
    },
    *fetchCompanies({payload}, {call, put}) {
      yield put({
        type: 'fillReceiveCompanies',
        payload: null,
      });
      const data = yield call(financingService.getCompanyObjects, payload);
      yield put({
        type: 'fillReceiveCompanies',
        payload: data,
      });
    },


  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: 'fetchNet',
          payload: {
            companyId: 1,
            twotime: {
              start: '2017-10',
              end: '2017-11',
            }
          },
        });
        dispatch({
          type: 'fetchCompanies',
          payload: {
            companyId: 1,
          },
        });
        dispatch({
          type: 'fetchStockNet',
          payload: {
            companyId: 1,
            twotime: {
              start: '2017-10',
              end: '2017-11',
            }
          },
        });
      });
    },
  },
};