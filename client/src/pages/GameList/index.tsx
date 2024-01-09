import { GameListLayout } from './Game.styled';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CustomButton } from 'components/Button';
import { selectWcwData } from 'components/Navigation/slice/selectors';
import { translations } from 'locales/translations';

export const GameListPage = (): JSX.Element => {
    const { t } = useTranslation();
    const wcwData = useSelector(selectWcwData);

    return <GameListLayout>Game List</GameListLayout>;
};
