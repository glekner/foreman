import LoadableComponent from 'react-loadable';
import loadingSpinner from './loadingSpinner';

/**
 * Create component which is loaded async, showing a loading spinner
 * in the meantime.
 * @param {Object} component - Loading options
 * @param {Function} component.loader - Loader function (should return import promise)
 * @param {Function} loading - Loading component
 */

export function Loadable(component, loading = loadingSpinner) {
  return LoadableComponent({
    loading,
    ...component,
  });
}
