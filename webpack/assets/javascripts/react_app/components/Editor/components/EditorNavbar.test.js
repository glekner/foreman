import React from 'react';
import { mount } from 'enzyme';
import { testComponentSnapshotsWithFixtures } from '../../../common/testHelpers';

import EditorNavbar from './EditorNavbar';
import { editorOptions, showBooleans } from '../Editor.fixtures';

const props = {
  ...editorOptions,
  ...showBooleans,
  isDiff: true,
};

const fixtures = {
  'renders EditorNavbar': props,
};

describe('EditorNavbar', () => {
  describe('rendring', () =>
    testComponentSnapshotsWithFixtures(EditorNavbar, fixtures));

  describe('simulate onClick', () => {
    const changeState = jest.fn();

    const wrapper = mount(
      <EditorNavbar
        {...props}
        changeState={changeState}
        isDiff
        isRendering
        selectedView="preview"
      />
    );
    wrapper
      .find('#input-navitem')
      .at(1)
      .simulate('click');
    wrapper
      .find('#diff-navitem')
      .at(1)
      .simulate('click');

    wrapper.setProps({ ...props, isRendering: false, selectedView: 'input' });
    wrapper.update();
    wrapper
      .find('#preview-navitem')
      .at(1)
      .simulate('click');
    expect(changeState).toHaveBeenCalledTimes(4);
  });
});
