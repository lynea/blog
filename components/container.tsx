import React, { FunctionComponent, ReactNode } from 'react';

type ContainerProps = {
    children?: ReactNode;
};

const Container: FunctionComponent<ContainerProps> = ({ children }) => (
    <div className="container mx-auto px-5">{children}</div>
);

export default Container;
