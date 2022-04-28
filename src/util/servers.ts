import axios from 'axios';

/**
 * 物品更新
 * @param {*} options
 * @returns
 */
export const goodsUpdate = (options: object) =>
  axios({
    method: 'post',
    url: '/ocean/goods/update',
    data: options,
  });
