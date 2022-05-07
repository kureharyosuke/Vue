import Vue from 'vue';
import TicTacToe from './pages/TicTacToe';

new Vue({
  render: createElement => createElement(TicTacToe)
}).$mount('#root');