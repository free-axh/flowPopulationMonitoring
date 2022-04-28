import { history } from 'umi';

// export async function getInitialState() {
//   return {
//     name: 'admin',
//   };
// }

import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings };
}): BasicLayoutProps => {
  return {
    onPageChange: () => {
      const { location } = history;
      if (location.pathname === '/') {
        history.push('/basicData/faceArchives');
      }
    },
    // headerRender: false,
    // footerRender: false,
    // menuRender: false,
    // menuHeaderRender: false,
    ...initialState?.settings,
  };
};
