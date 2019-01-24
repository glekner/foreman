import { noop } from '../../common/helpers';

export const editor = {
  name: 'editor',
  diffViewType: 'split',
  value: 'value',
  hosts: { host1: 1, host2: 2 },
  renderedValue: '',
  mode: 'Ruby',
  theme: 'Monokai',
  keyBinding: 'Default',
  selectedView: 'input',
  editorName: 'editor',
  isMaximized: false,
  isMasked: false,
  isRendering: false,
  readOnly: false,
  showError: true,
  errorText: '',
};

export const dropdowns = {
  modes: ['Text', 'Json', 'Ruby', 'Html_ruby', 'Sh', 'Xml', 'Yaml'],
  keyBindings: ['Default', 'Emacs', 'Vim'],
  themes: ['Github', 'Monokai'],
};

export const showBooleans = {
  showPreview: true,
  showImport: true,
  showHide: true,
};

export const editorOptions = {
  ...editor,
  ...dropdowns,
  data: {
    ...showBooleans,
    name: 'editor',
    title: 'title',
    template: '<? />',
    options: dropdowns,
    hosts: [
      { host: { name: 'host1', id: 1 } },
      { host: { name: 'host2', id: 2 } },
    ],
  },
  initializeEditor: noop,
  importFile: noop,
  revertChanges: noop,
  previewTemplate: noop,
  toggleModal: noop,
  changeDiffViewType: noop,
  changeEditorValue: noop,
  dismissErrorToast: noop,
  changeTab: noop,
  toggleMaskValue: noop,
  changeSetting: noop,
  toggleRenderView: noop,
  template: '<? />',
  renderPath: '/render/path',
};

export const serverRenderResponse = {
  data: '< renderedData />',
};

export const hosts = [
  { host: { name: 'host1', id: 1 } },
  { host: { name: 'host2', id: 2 } },
];
