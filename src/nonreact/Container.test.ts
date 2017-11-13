import { Container } from './Container';

const templateVisible = {
    visibility: 'visible'
};

const templateHidden = {
    visibility: 'hidden'
};

test('renders a container', () => {
    const result = new Container(templateVisible).render();
    expect(result).toMatchSnapshot();
});

test('visibility is hidden', () => {
    const result = new Container(templateHidden).render();
    expect(result).toMatchSnapshot();
});
