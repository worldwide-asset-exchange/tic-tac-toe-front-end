import { GameLayout } from './Game.styled';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectWcwData } from 'components/Navigation/slice/selectors';
import { translations } from 'locales/translations';

export const GamePage = (): JSX.Element => {
    const { t } = useTranslation();
    const { id } = useParams();
    const wcwData = useSelector(selectWcwData);
    return <GameLayout>{id}</GameLayout>;
};
