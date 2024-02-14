import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import filed from '@/public/assets/images/Tec.svg';

import { CardProject } from '.';

describe('render CardProject component', () => {
  it('should render root cardproject', () => {
    const { getByText } = render(
      <CardProject.Root title="title">
        <div>content</div>
      </CardProject.Root>,
    );
    expect(getByText('content')).toBeInTheDocument();
  });

  it('should show content only when image is visible', () => {
    const { getByAltText, getByText } = render(
      <CardProject.Content image={filed}>
        <p>Conteúdo</p>
      </CardProject.Content>,
    );

    const image = getByAltText('aaa');
    mockAllIsIntersecting(true);
    fireEvent.mouseEnter(image);
    expect(getByText('Conteúdo')).toBeInTheDocument();
  });
});
