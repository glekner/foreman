import { Loadable } from '../../../utils';

export default Loadable({
  loader: () => import('./Editor'),
});
