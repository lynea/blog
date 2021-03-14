import { FunctionComponent } from 'react';

interface AvatarProps {
    name: string;
    picture: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({ name, picture }) => <div className="flex items-center" />;

export default Avatar;
